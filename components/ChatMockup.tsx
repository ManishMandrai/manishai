"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

type Message = {
  from: "customer" | "assistant";
  text: string;
  time: string;
};

const messages: Message[] = [
  {
    from: "customer",
    text: "Hi, do you have any availability this Thursday afternoon?",
    time: "9:41 AM",
  },
  {
    from: "assistant",
    text: "Yes — Thursday has openings at 1:30 PM and 3:00 PM. Which works better for you?",
    time: "9:41 AM",
  },
  {
    from: "customer",
    text: "3pm please",
    time: "9:42 AM",
  },
  {
    from: "assistant",
    text: "You're booked for Thursday at 3:00 PM. I've sent a confirmation to your email.",
    time: "9:42 AM",
  },
];

export default function ChatMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      className="w-full max-w-[480px] overflow-hidden rounded-2xl border border-border bg-white shadow-soft"
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-[#FAFAFA] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#E5E5E5]" />
        </div>
        <div className="mx-auto flex items-center gap-1.5 rounded-md bg-white px-3 py-1 text-[12px] text-secondary">
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          yourbusiness.com/chat
        </div>
      </div>

      {/* Chat header */}
      <div className="flex items-center gap-3 border-b border-border px-5 py-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-[13px] font-semibold text-white">
          AI
        </div>
        <div>
          <p className="text-[14px] font-semibold text-primary">
            Business Assistant
          </p>
          <p className="text-[12px] text-success">Online now</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-3 px-5 py-5">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.35 }}
            className={`flex ${
              m.from === "customer" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-xl px-4 py-2.5 text-[13.5px] leading-relaxed ${
                m.from === "customer"
                  ? "bg-primary text-white"
                  : "bg-[#F4F4F5] text-primary"
              }`}
            >
              {m.text}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 + messages.length * 0.35 + 0.2 }}
          className="flex items-center gap-1.5 pl-1 text-[12px] text-secondary"
        >
          <Check size={13} className="text-success" />
          Confirmation sent · booked automatically
        </motion.div>
      </div>
    </motion.div>
  );
}
