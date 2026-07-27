"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Check } from "lucide-react";
import { whatsappMessages } from "@/lib/data";

const TYPING_DURATION = 1100;
const GAP_AFTER_MESSAGE = 700;

export default function WhatsAppCard() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typingIndex, setTypingIndex] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    let index = 0;

    const runNext = () => {
      if (cancelled || index >= whatsappMessages.length) return;
      const message = whatsappMessages[index];

      const showMessage = () => {
        if (cancelled) return;
        setTypingIndex(null);
        setVisibleCount(index + 1);
        index += 1;
        setTimeout(runNext, GAP_AFTER_MESSAGE);
      };

      if (message.from === "ai") {
        setTypingIndex(index);
        setTimeout(showMessage, TYPING_DURATION);
      } else {
        setTimeout(showMessage, 300);
      }
    };

    const initialDelay = setTimeout(runNext, 500);
    return () => {
      cancelled = true;
      clearTimeout(initialDelay);
    };
  }, []);

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="w-full max-w-sm rounded-2xl border border-border bg-white shadow-lift"
    >
      <div className="flex items-center gap-3 rounded-t-2xl border-b border-border bg-section px-5 py-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
          <MessageCircle className="h-4 w-4 text-white" strokeWidth={2} />
        </div>
        <div>
          <p className="text-sm font-medium text-primary">Realty Assist AI</p>
          <p className="text-xs text-secondary">Active now</p>
        </div>
      </div>

      <div className="flex min-h-[280px] flex-col gap-3 px-5 py-6">
        <AnimatePresence initial={false}>
          {whatsappMessages.slice(0, visibleCount).map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className={`flex ${
                message.from === "ai" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed ${
                  message.from === "ai"
                    ? "rounded-tl-sm bg-section text-primary"
                    : "rounded-tr-sm bg-accent text-white"
                }`}
              >
                {message.text}
              </div>
            </motion.div>
          ))}

          {typingIndex !== null && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex justify-start"
            >
              <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-section px-4 py-3">
                {[0, 1, 2].map((dot) => (
                  <motion.span
                    key={dot}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: dot * 0.15,
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-secondary"
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {visibleCount === whatsappMessages.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1 self-end pr-1 text-secondary"
          >
            <Check className="h-3 w-3" />
            <Check className="-ml-2 h-3 w-3" />
            <span className="ml-1 text-[11px]">Seen</span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}