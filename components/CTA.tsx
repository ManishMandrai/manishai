"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="bg-section">
      <div className="mx-auto max-w-8xl px-6 py-24 lg:px-10 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl rounded-2xl border border-border bg-white px-8 py-16 text-center shadow-soft sm:px-16"
        >
          <h2 className="text-[30px] font-bold tracking-tight text-primary sm:text-[36px]">
            Ready to automate your business?
          </h2>
          <p className="mt-4 text-[16px] font-medium leading-relaxed text-secondary">
            Book a free strategy call and see how an AI assistant can work
            for your business.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:hello@manishai.com"
              className="rounded-lg bg-primary px-6 py-3 text-[15px] font-medium text-white shadow-softer transition-all hover:bg-black/85 active:scale-[0.98]"
            >
              Book Demo
            </a>
            <a
              href="https://wa.me/"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-white px-6 py-3 text-[15px] font-medium text-primary transition-colors hover:bg-section"
            >
              <MessageCircle size={16} className="text-success" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
