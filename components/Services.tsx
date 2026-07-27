"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="bg-section py-24 md:py-28">
      <div className="container-content">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight text-primary md:text-4xl"
        >
          What I Build
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-border bg-white p-7 shadow-soft transition-shadow hover:shadow-card"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-section">
                  <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
