"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understand your business.",
  },
  {
    number: "02",
    title: "Build",
    description: "Train your AI assistant.",
  },
  {
    number: "03",
    title: "Launch",
    description: "Deploy and optimise.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-section">
      <div className="mx-auto max-w-8xl px-6 py-24 lg:px-10 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl text-center"
        >
          <h2 className="text-[32px] font-bold tracking-tight text-primary sm:text-[38px]">
            How it works
          </h2>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative text-center"
            >
              <span className="text-[13px] font-semibold tracking-widest text-accent">
                {step.number}
              </span>
              <h3 className="mt-3 text-[19px] font-semibold text-primary">
                {step.title}
              </h3>
              <p className="mt-2 text-[14px] font-medium text-secondary">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
