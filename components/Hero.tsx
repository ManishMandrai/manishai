"use client";

import { motion } from "framer-motion";
import { Sparkles, MessageCircle } from "lucide-react";
import ChatMockup from "./ChatMockup";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-28">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 text-[13px] font-medium text-secondary shadow-softer"
          >
            <Sparkles size={14} className="text-accent" />
            AI Automation for Small Businesses
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="text-[42px] font-bold leading-[1.1] tracking-tight text-primary sm:text-[52px] lg:text-[58px]"
          >
            Never Miss Another Customer Again.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="mt-6 max-w-lg text-[17px] font-medium leading-relaxed text-secondary"
          >
            I build AI assistants that answer enquiries, qualify leads,
            automate customer support and book appointments 24/7—so your
            business never misses an opportunity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              className="rounded-lg bg-primary px-6 py-3 text-center text-[15px] font-medium text-white shadow-soft transition-all hover:bg-black/85 active:scale-[0.98]"
            >
              Book a Free Demo
            </a>
            <a
              href="https://wa.me/"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-white px-6 py-3 text-[15px] font-medium text-primary transition-colors hover:bg-section"
            >
              <MessageCircle size={16} className="text-success" />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <ChatMockup />
        </div>
      </div>
    </section>
  );
}
