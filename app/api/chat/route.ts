import { NextResponse } from "next/server";
import { generate, type ChatMessage } from "@/lib/llm";
import { SYSTEM_PROMPT } from "@/lib/chatPrompt";

const MAX_MESSAGES = 12; // history sent to the model
const MAX_CHARS = 500; // per message
const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 12;

// Best-effort limiter. On serverless each instance has its own memory, so for
// a hard limit later use Upstash Redis / Vercel KV instead.
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_REQUESTS_PER_WINDOW;
}

function sameOrigin(req: Request) {
  const origin = req.headers.get("origin");
  if (!origin) return true; // server-to-server / curl; still rate limited
  try {
    return new URL(origin).host === req.headers.get("host");
  } catch {
    return false;
  }
}

function clean(input: unknown): ChatMessage[] {
  if (!Array.isArray(input)) return [];
  const out: ChatMessage[] = [];
  for (const m of input) {
    if (
      m &&
      (m.role === "user" || m.role === "assistant") &&
      typeof m.content === "string" &&
      m.content.trim()
    ) {
      out.push({ role: m.role, content: m.content.trim().slice(0, MAX_CHARS) });
    }
  }
  const recent = out.slice(-MAX_MESSAGES);
  while (recent.length && recent[0].role !== "user") recent.shift(); // must start with user
  return recent;
}

export async function POST(req: Request) {
  if (!sameOrigin(req)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many messages. Please wait a minute." }, { status: 429 });
  }

  let body: { messages?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  const messages = clean(body.messages);
  if (!messages.length || messages[messages.length - 1].role !== "user") {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  try {
    const reply = (await generate(SYSTEM_PROMPT, messages)).trim();
    if (!reply) throw new Error("Empty reply");
    return NextResponse.json({ reply });
  } catch (err) {
    console.error("[chat]", err);
    return NextResponse.json({ error: "Assistant unavailable" }, { status: 502 });
  }
}
