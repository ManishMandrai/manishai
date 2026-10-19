"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { DEMO_LINK, openChat } from "@/lib/contact";

const reassurance = ["Free first call", "No obligation", "Clear quote after the demo"];

export default function CTA() {
  return (
    <section id="contact" className="bg-section py-24 md:py-28">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative isolate overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center shadow-lift sm:px-10 md:py-20"
        >
          {/* soft colour glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 50% 60% at 15% 0%, rgba(37,99,235,0.35), transparent), radial-gradient(ellipse 45% 55% at 90% 100%, rgba(124,58,237,0.30), transparent)",
            }}
          />

          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
            Get started
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
            Ready to put an AI assistant to work for your business?
          </h2>
          <p className="mx-auto mt-4 max-w-prose text-base leading-relaxed text-white/70">
            Book a free demo and I&apos;ll show you what it could look like for
            your business. No pressure, no hard sell.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <motion.button
              type="button"
              onClick={() => openChat("I'd like to book a free demo.")}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-medium text-primary transition-colors hover:bg-section sm:w-auto"
            >
              Book a free demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </motion.button>

            <motion.a
              href={DEMO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              <FaWhatsapp className="h-5 w-5 text-[#25D366]" />
              Chat on WhatsApp
            </motion.a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {reassurance.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                <Check className="h-4 w-4 text-emerald-400" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}