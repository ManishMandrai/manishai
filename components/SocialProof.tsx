"use client";

import { motion } from "framer-motion";

const platforms = ["WhatsApp Business", "OpenAI", "Twilio", "Vercel", "Stripe"];

export default function SocialProof() {
  return (
    <section className="border-y border-border bg-section">
      <div className="mx-auto max-w-8xl px-6 py-14 lg:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-[13px] font-medium uppercase tracking-wider text-secondary"
        >
          Built using trusted platforms
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-5"
        >
          {platforms.map((name) => (
            <span
              key={name}
              className="text-[16px] font-semibold tracking-tight text-[#B3B3B3] transition-colors hover:text-secondary"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
