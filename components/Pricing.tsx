"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Globe, MessagesSquare, CalendarCheck } from "lucide-react";
import { plans, pricingNotes } from "@/lib/pricing";
import { openChat } from "@/lib/contact";
import SectionHeader from "./SectionHeader";

const noteIcons = [Globe, MessagesSquare, CalendarCheck];

export default function Pricing() {
  return (
    <section id="pricing" className="relative isolate overflow-hidden bg-primary py-24 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 0%, rgba(37,99,235,0.30), transparent), radial-gradient(ellipse 40% 40% at 92% 100%, rgba(124,58,237,0.24), transparent)",
        }}
      />

      <div className="container-content">
        <SectionHeader
          tone="dark"
          eyebrow="Pricing"
          title="Simple, transparent pricing."
          subtitle="A one-time setup fee plus a flat monthly fee. No hidden extras, and every plan starts with a free demo call."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan, index) => {
            const hl = plan.highlighted;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col rounded-2xl p-8 ${
                  hl
                    ? "bg-white text-primary shadow-lift ring-1 ring-white/30 lg:-my-4 lg:py-12"
                    : "border border-white/10 bg-white/5 text-white backdrop-blur"
                }`}
              >
                {plan.badge && (
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-accent to-[#7C3AED] px-3.5 py-1 text-xs font-semibold text-white shadow-card">
                    {plan.badge}
                  </span>
                )}

                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className={`mt-1.5 min-h-[2.75rem] text-sm leading-relaxed ${hl ? "text-secondary" : "text-white/65"}`}>
                  {plan.tagline}
                </p>

                <div className="mt-6">
                  <div className="flex items-baseline gap-1.5">
                    {plan.prefix && (
                      <span className={`text-sm ${hl ? "text-secondary" : "text-white/65"}`}>
                        {plan.prefix}
                      </span>
                    )}
                    <span className="text-5xl font-bold tracking-tight">{plan.monthly}</span>
                    <span className={`text-sm ${hl ? "text-secondary" : "text-white/65"}`}>/ month</span>
                  </div>
                  <p className={`mt-2 text-sm ${hl ? "text-secondary" : "text-white/65"}`}>
                    + {plan.prefix ? `${plan.prefix} ` : ""}
                    <span className={`font-medium ${hl ? "text-primary" : "text-white"}`}>
                      {plan.setup}
                    </span>{" "}
                    one-time setup
                  </p>
                </div>

                <div className={`my-6 h-px ${hl ? "bg-border" : "bg-white/10"}`} />

                {plan.inherits && (
                  <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.1em] ${hl ? "text-secondary" : "text-white/55"}`}>
                    Everything in {plan.inherits}, plus
                  </p>
                )}

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <span
                        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                          hl ? "bg-emerald-50" : "bg-emerald-400/15"
                        }`}
                      >
                        <Check
                          className={`h-2.5 w-2.5 ${hl ? "text-emerald-600" : "text-emerald-300"}`}
                          strokeWidth={3}
                        />
                      </span>
                      <span className={hl ? "text-primary" : "text-white/90"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => openChat(plan.ctaMessage)}
                  className={`group mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-colors ${
                    hl
                      ? "bg-primary text-white hover:bg-[#1f2937]"
                      : "border border-white/15 bg-white/10 text-white hover:bg-white/15"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </motion.div>
            );
          })}
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-4 text-sm text-white/70 md:grid-cols-3">
          {pricingNotes.map((note, i) => {
            const Icon = noteIcons[i % noteIcons.length];
            return (
              <li key={note} className="flex items-start gap-2.5">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />
                {note}
              </li>
            );
          })}
        </ul>

        <p className="mt-8 text-center text-sm text-white/60">
          Not sure which plan fits?{" "}
          <button
            type="button"
            onClick={() => openChat("Which plan would suit my business?")}
            className="font-medium text-white underline underline-offset-4 hover:text-blue-200"
          >
            Ask the assistant
          </button>
        </p>
      </div>
    </section>
  );
}