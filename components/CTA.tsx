"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function CTA() {
  return (
    <section id="contact" className="bg-section py-24 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="container-content flex flex-col items-center rounded-3xl border border-border bg-white px-8 py-16 text-center shadow-soft md:py-20"
      >
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-primary md:text-4xl">
          Ready to Automate Your Business?
        </h2>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-secondary">
          Let&apos;s build an AI assistant that works while you focus on
          growing your business.
        </p>

        <div className="mt-8">
          <motion.a
            href="https://wa.me/918435428491"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-medium text-white shadow-soft transition-colors hover:bg-[#1fb959]"
          >
            <FaWhatsapp className="h-4 w-4" />
            Chat on WhatsApp
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}