"use client";

import { motion } from "framer-motion";
import { steps } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-28">
      <div className="container-content">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tight text-primary md:text-4xl"
        >
          How It Works
        </motion.h2>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-start"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white shadow-soft">
                  <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-secondary">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
