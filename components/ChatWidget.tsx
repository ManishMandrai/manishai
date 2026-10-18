"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { DEMO_LINK } from "@/lib/contact";

type Msg = { role: "user" | "assistant"; content: string };

const GREETING =
  "Hi! I'm the ManishAI assistant. I can show you how an AI assistant could answer your customers and book appointments for you. What kind of business do you run?";

const QUICK_REPLIES = [
  "What can you automate?",
  "How long does setup take?",
  "Can it work on WhatsApp?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, loading, open]);

  // Keep the latest state reachable from the window event listener below.
  const sendRef = useRef<(text: string) => void>(() => {});
  const messagesRef = useRef<Msg[]>([]);
  useEffect(() => {
    sendRef.current = send;
    messagesRef.current = messages;
  });

  // Any button on the page can open the chat via openChat() from lib/contact.ts
  useEffect(() => {
    const onOpen = (e: Event) => {
      setOpen(true);
      const message = (e as CustomEvent<{ message?: string }>).detail?.message;
      if (!message) return;
      const lastUser = [...messagesRef.current].reverse().find((m) => m.role === "user");
      if (lastUser?.content === message) return; // don't repeat on double clicks
      sendRef.current(message);
    };
    window.addEventListener("manishai:open-chat", onOpen);
    return () => window.removeEventListener("manishai:open-chat", onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || loading) return;

    const next: Msg[] = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      if (!res.ok || !data.reply) throw new Error(data.error ?? "failed");
      setMessages([...next, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            "Sorry, I couldn't reply just now. You can reach Manish directly on WhatsApp using the green button below.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Chat with ManishAI assistant"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 z-[60] flex h-[540px] max-h-[calc(100dvh-8rem)] w-[calc(100vw-2rem)] max-w-sm flex-col rounded-2xl border border-border bg-white shadow-lift sm:right-6"
          >
            <div className="flex items-center gap-3 rounded-t-2xl border-b border-border bg-section px-5 py-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
                <MessageCircle className="h-4 w-4 text-white" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-primary">ManishAI Assistant</p>
                <p className="text-xs text-secondary">Replies instantly</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="rounded-lg p-1.5 text-secondary transition-colors hover:bg-border/60 hover:text-primary"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4" aria-live="polite">
              <Bubble role="assistant">{GREETING}</Bubble>

              {messages.length === 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {QUICK_REPLIES.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="rounded-full border border-border bg-white px-3 py-1.5 text-xs text-primary transition-colors hover:bg-section"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {messages.map((m, i) => (
                <Bubble key={i} role={m.role}>
                  {m.content}
                </Bubble>
              ))}

              {loading && (
                <div className="flex w-fit items-center gap-1 rounded-2xl rounded-bl-md border border-border bg-section px-4 py-3">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-secondary"
                      style={{ animationDelay: `${d * 0.15}s` }}
                    />
                  ))}
                </div>
              )}
              <div ref={endRef} />
            </div>

            <div className="border-t border-border p-3">
              <a
                href={DEMO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#1fb959]"
              >
                <FaWhatsapp className="h-4 w-4" />
                Book a free demo on WhatsApp
              </a>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  maxLength={500}
                  placeholder="Type your message..."
                  aria-label="Your message"
                  className="min-w-0 flex-1 rounded-xl border border-border bg-white px-3 py-2 text-sm text-primary placeholder:text-secondary/70 focus:border-accent focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  aria-label="Send message"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white transition-opacity disabled:opacity-40"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.96 }}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        className="fixed bottom-5 right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lift sm:right-6"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </motion.button>
    </>
  );
}

function Bubble({ role, children }: { role: Msg["role"]; children: React.ReactNode }) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <p
        className={`max-w-[85%] whitespace-pre-wrap break-words px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "rounded-2xl rounded-br-md bg-primary text-white"
            : "rounded-2xl rounded-bl-md border border-border bg-section text-primary"
        }`}
      >
        {children}
      </p>
    </div>
  );
}