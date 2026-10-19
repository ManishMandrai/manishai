"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, Code2, Globe, Receipt, ShieldCheck, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/contact";
import SectionHeader from "./SectionHeader";

/* ----- EDIT ME: make sure every line below is true for you ----- */
const story = [
  {
    icon: Clock,
    title: "Why I started",
    text: "Customers message when it suits them, not when you're open. Slow replies quietly cost businesses leads every single day.",
  },
  {
    icon: Code2,
    title: "How I work",
    text: "I design, build and tune your assistant myself. No account managers and no hand-offs, so changes are quick.",
  },
  {
    icon: ShieldCheck,
    title: "My promise",
    text: "Plain English, clear pricing and honest timelines. If it won't work for your business, I'll tell you.",
  },
];

const tools = [
  "WhatsApp Cloud API",
  "Claude",
  "Gemini",
  "Node.js",
  "Next.js",
  "TypeScript",
  "Google Calendar",
];

const practical = [
  { icon: Globe, text: "Based in India (IST)" },
  { icon: Clock, text: "Overlap with UK and US East Coast hours" },
  { icon: Receipt, text: "Clear quotes, invoiced in USD or GBP" },
];
/* ---------------------------------------------------------------- */

export default function About() {
  return (
    <section id="about" className="bg-section py-24 md:py-28">
      <div className="container-content grid grid-cols-1 items-start gap-12 lg:grid-cols-[340px_1fr] lg:gap-16">
        {/* ---------- Photo ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-white shadow-card">
            <Image
              src="/manish.png"
              alt="Manish, founder of ManishAI"
              fill
              sizes="(min-width: 1024px) 340px, 90vw"
              className="object-cover object-top"
              
              priority
            />
            <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-xl border border-white/60 bg-white/85 px-4 py-3 backdrop-blur">
              <div>
                <p className="text-sm font-semibold text-primary">Manish</p>
                <p className="text-xs text-secondary">Founder, ManishAI</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Manish on GitHub"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-white text-primary transition-colors hover:bg-section"
                >
                  <FaGithub className="h-4 w-4" />
                </a>
                {LINKEDIN_URL && (
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Manish on LinkedIn"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-white text-primary transition-colors hover:bg-section"
                  >
                    <FaLinkedinIn className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ---------- Copy ---------- */}
        <div>
          <SectionHeader
            align="left"
            eyebrow="About"
            title="A developer-led studio: you talk to the person who builds your assistant."
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-5 max-w-prose text-base leading-relaxed text-secondary"
          >
            I&apos;m Manish, a full-stack developer building practical AI
            automation for small businesses that can&apos;t afford to miss a
            message.
          </motion.p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {story.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-white p-5 shadow-soft"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="h-4 w-4 text-accent" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-primary">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-secondary">{text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary">
              Tools I work with
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-medium text-primary shadow-soft"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {practical.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-2.5 text-sm text-primary">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {text}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
            </span>
            <div>
              <p className="text-sm font-semibold text-primary">
                Your customers&apos; data stays yours.
              </p>
              <p className="mt-1 text-sm leading-relaxed text-secondary">
                I never sell conversation data, and I only keep what your workflow
                needs.{" "}
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-0.5 font-medium text-accent hover:underline"
                >
                  How it's handled
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}