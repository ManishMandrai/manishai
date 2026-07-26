"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const items = [
  "AI Automation",
  "WhatsApp Business",
  "OpenAI",
  "Next.js",
  "Business Workflows",
];

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="order-2 mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-section lg:order-1"
        >
          <div className="flex h-full w-full items-center justify-center text-[14px] font-medium text-secondary">
            Photo of Manish
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 lg:order-2"
        >
          <h2 className="text-[32px] font-bold tracking-tight text-primary sm:text-[38px]">
            Hi, I&apos;m Manish.
          </h2>
          <p className="mt-6 text-[16px] font-medium leading-relaxed text-secondary">
            I&apos;m a full-stack developer specialising in AI automation for
            small businesses.
          </p>
          <p className="mt-4 text-[16px] font-medium leading-relaxed text-secondary">
            I design practical AI systems that help businesses respond
            faster, capture more leads and reduce repetitive work.
          </p>
          <p className="mt-4 text-[16px] font-medium leading-relaxed text-secondary">
            Every automation is customised around the way your business
            already operates.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-[14px] font-medium text-primary"
              >
                <Check size={15} className="text-success" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
