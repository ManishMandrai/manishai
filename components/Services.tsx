"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { services } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function Services() {
  return (
    <section id="services" className="bg-section py-24 md:py-28">
      <div className="container-content">
        <SectionHeader
          eyebrow="Services"
          title="Everything your customers ask, handled."
          subtitle="Start with one assistant or combine several. Each one is built around your business, not copied from a template."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col rounded-2xl border border-border bg-white p-7 shadow-soft transition-shadow hover:shadow-card"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                    <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-[0.1em] text-secondary">
                    {service.title}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold leading-snug text-primary">
                  {service.headline}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary">
                  {service.description}
                </p>

                <ul className="mb-6 mt-5 space-y-2.5">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm text-primary">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                        <Check className="h-2.5 w-2.5 text-emerald-600" strokeWidth={3} />
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto border-t border-border pt-4 text-xs text-secondary">
                  <span className="font-medium text-primary">Best for: </span>
                  {service.bestFor}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}