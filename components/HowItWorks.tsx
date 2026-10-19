"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, ClipboardList, Info, RefreshCw } from "lucide-react";
import { steps, needs, afterLaunch, whatsappNote } from "@/lib/data";
import { openChat } from "@/lib/contact";
import SectionHeader from "./SectionHeader";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-28">
      <div className="container-content">
        <SectionHeader
          eyebrow="How it works"
          title="From first call to a working assistant in about a week."
          subtitle="A simple, predictable process. You only need to hand me a few things."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          {/* ---------- Timeline ---------- */}
          <div>
            <ol className="relative space-y-5">
              <div
                aria-hidden
                className="absolute bottom-6 left-6 top-6 hidden w-px bg-border sm:block"
              />
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.li
                    key={step.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="relative flex gap-5"
                  >
                    <div className="relative z-10 hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-white shadow-soft sm:flex">
                      <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                    </div>
                    <div className="flex-1 rounded-2xl border border-border bg-white p-6 shadow-soft">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white sm:hidden">
                          {index + 1}
                        </span>
                        <h3 className="text-base font-semibold text-primary">
                          {step.title}
                        </h3>
                        <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                          {step.when}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-secondary">
                        {step.description}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ol>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="mt-5 flex items-start gap-3 rounded-2xl border border-accent/20 bg-accent/5 p-5 sm:ml-[68px]"
            >
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <p className="text-sm leading-relaxed text-primary">
                <span className="font-semibold">Good to know: </span>
                {whatsappNote}
              </p>
            </motion.div>
          </div>

          {/* ---------- Side cards ---------- */}
          <div className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-border bg-white p-6 shadow-soft"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
                  <ClipboardList className="h-4 w-4 text-accent" />
                </span>
                <h3 className="text-base font-semibold text-primary">
                  What I need from you
                </h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {needs.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-primary">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                      <Check className="h-2.5 w-2.5 text-emerald-600" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="rounded-2xl border border-border bg-white p-6 shadow-soft"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50">
                  <RefreshCw className="h-4 w-4 text-violet-600" />
                </span>
                <h3 className="text-base font-semibold text-primary">
                  {afterLaunch.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-secondary">
                {afterLaunch.description}
              </p>
              <ul className="mt-4 space-y-2.5">
                {afterLaunch.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-primary">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                      <Check className="h-2.5 w-2.5 text-emerald-600" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="rounded-2xl bg-primary p-6 text-white shadow-lift"
            >
              <h3 className="text-base font-semibold">Ready to start?</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                The first call is free. We'll map out the right assistant for your
                business.
              </p>
              <button
                type="button"
                onClick={() => openChat("I'd like to book a free demo.")}
                className="group mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-section"
              >
                Book a free demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}