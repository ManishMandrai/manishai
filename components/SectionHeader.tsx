"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
};

export default function SectionHeader({ eyebrow, title, subtitle, align = "center", tone = "light" }: Props) {
  const center = align === "center";
  const dark = tone === "dark";
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <p
        className={`text-xs font-semibold uppercase tracking-[0.14em] ${
          dark ? "text-blue-300" : "text-accent"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-bold tracking-tight md:text-4xl ${
          dark ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            dark ? "text-white/70" : "text-secondary"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}