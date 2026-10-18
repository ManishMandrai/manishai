// One function, any provider. Switch with LLM_PROVIDER=gemini|groq|claude.
export type ChatMessage = { role: "user" | "assistant"; content: string };

const {
  LLM_PROVIDER = "gemini",
  GEMINI_API_KEY,
  GEMINI_MODEL = "gemini-2.5-flash",
  GROQ_API_KEY,
  GROQ_MODEL = "llama-3.3-70b-versatile",
  ANTHROPIC_API_KEY,
  CLAUDE_MODEL = "claude-haiku-5-5",
} = process.env;

const TIMEOUT_MS = 20_000;

export async function generate(system: string, messages: ChatMessage[]): Promise<string> {
  switch (LLM_PROVIDER) {
    case "gemini":
      return gemini(system, messages);
    case "groq":
      return groq(system, messages);
    case "claude":
      return claude(system, messages);
    default:
      throw new Error(`Unknown LLM_PROVIDER: ${LLM_PROVIDER}`);
  }
}

async function gemini(system: string, messages: ChatMessage[]) {
  if (!GEMINI_API_KEY) throw new Error("GEMINI_API_KEY is not set");
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": GEMINI_API_KEY },
      signal: AbortSignal.timeout(TIMEOUT_MS),
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: system }] },
        contents: messages.map((m) => ({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: m.content }],
        })),
        generationConfig: { maxOutputTokens: 400 },
      }),
    }
  );
  const data = await res.json();
  if (!res.ok) throw new Error(`Gemini ${res.status}: ${JSON.stringify(data)}`);
  return (data.candidates?.[0]?.content?.parts ?? []).map((p: { text?: string }) => p.text ?? "").join("");
}

async function groq(system: string, messages: ChatMessage[]) {
  if (!GROQ_API_KEY) throw new Error("GROQ_API_KEY is not set");
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${GROQ_API_KEY}` },
    signal: AbortSignal.timeout(TIMEOUT_MS),
    body: JSON.stringify({
      model: GROQ_MODEL,
      max_tokens: 400,
      messages: [{ role: "system", content: system }, ...messages],
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`Groq ${res.status}: ${JSON.stringify(data)}`);
  return data.choices?.[0]?.message?.content ?? "";
}

async function claude(system: string, messages: ChatMessage[]) {
  if (!ANTHROPIC_API_KEY) throw new Error("ANTHROPIC_API_KEY is not set");
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    signal: AbortSignal.timeout(TIMEOUT_MS),
    body: JSON.stringify({ model: CLAUDE_MODEL, max_tokens: 400, system, messages }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`Claude ${res.status}: ${JSON.stringify(data)}`);
  return (data.content ?? [])
    .filter((b: { type: string }) => b.type === "text")
    .map((b: { text: string }) => b.text)
    .join("");
}
