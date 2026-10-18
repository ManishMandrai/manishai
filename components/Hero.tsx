"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowRight,
    Sparkles,
    MessageCircle,
    Zap,
    UserCheck,
    CalendarCheck,
    Stethoscope,
    Scale,
    Building2,
    Wrench,
    Scissors,
    ShoppingBag,
    type LucideIcon,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { openChat } from "@/lib/contact";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: EASE },
});

const proof = [
    "Live in 5–7 days",
    "WhatsApp + your website",
    "Answers 24/7",
];

type Tone = "blue" | "violet" | "green";

const toneClass: Record<Tone, string> = {
    blue: "bg-accent/10 text-accent",
    violet: "bg-violet-50 text-violet-600",
    green: "bg-emerald-50 text-emerald-600",
};

const activity: {
    icon: LucideIcon;
    tone: Tone;
    title: string;
    detail: string;
    time: string;
}[] = [
    {
        icon: MessageCircle,
        tone: "blue",
        title: "New enquiry on WhatsApp",
        detail: "“Do you have any emergency appointments tomorrow?”",
        time: "2:14 AM",
    },
    {
        icon: Zap,
        tone: "violet",
        title: "AI replied in 4 seconds",
        detail: "Asked about symptoms and insurance",
        time: "2:14 AM",
    },
    {
        icon: UserCheck,
        tone: "blue",
        title: "Lead qualified",
        detail: "Emergency visit · Insured · Contact saved",
        time: "2:15 AM",
    },
    {
        icon: CalendarCheck,
        tone: "green",
        title: "Appointment booked",
        detail: "Tomorrow, 9:30 AM · Reminder scheduled",
        time: "2:16 AM",
    },
];

const industries: { icon: LucideIcon; label: string }[] = [
    { icon: Stethoscope, label: "Clinics & dental" },
    { icon: Scale, label: "Law & professional services" },
    { icon: Building2, label: "Estate agents" },
    { icon: Wrench, label: "Home services" },
    { icon: Scissors, label: "Salons & wellness" },
    { icon: ShoppingBag, label: "E-commerce" },
];

export default function Hero() {
    const reduce = useReducedMotion();

    return (
        <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
            {/* Background: grid + soft colour glows */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(17,24,39,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,24,39,0.045) 1px, transparent 1px)",
                        backgroundSize: "56px 56px",
                        maskImage:
                            "radial-gradient(ellipse 75% 65% at 50% 0%, black 30%, transparent 100%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 75% 65% at 50% 0%, black 30%, transparent 100%)",
                    }}
                />
                <div
                    className="absolute inset-x-0 top-0 h-[640px]"
                    style={{
                        background:
                            "radial-gradient(ellipse 55% 45% at 20% 0%, rgba(37,99,235,0.09), transparent), radial-gradient(ellipse 45% 40% at 85% 25%, rgba(124,58,237,0.07), transparent)",
                    }}
                />
            </div>

            <div className="container-content">
                <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[1.05fr_1fr] md:gap-10 lg:gap-16">
                    {/* ---------- Left: copy ---------- */}
                    <div>
                        <motion.div
                            {...fadeUp(0)}
                            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-white/80 px-4 py-1.5 text-xs font-medium text-secondary shadow-soft backdrop-blur"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                            </span>
                            Now onboarding new clients
                        </motion.div>

                        <motion.h1
                            {...fadeUp(0.08)}
                            className="text-[2.5rem] font-bold leading-[1.08] tracking-tight text-primary sm:text-5xl lg:text-[3.5rem]"
                        >
                            Turn every enquiry into a{" "}
                            <span className="bg-gradient-to-r from-accent to-[#7C3AED] bg-clip-text text-transparent">
                                booked customer.
                            </span>
                        </motion.h1>

                        <motion.p
                            {...fadeUp(0.16)}
                            className="mt-6 max-w-[34rem] text-lg leading-relaxed text-secondary"
                        >
                            Custom AI assistants for WhatsApp and your website that answer
                            questions, qualify leads and book appointments around the
                            clock. Live in days, not months.
                        </motion.p>

                        <motion.div
                            {...fadeUp(0.24)}
                            className="mt-9 flex flex-col gap-3 sm:flex-row"
                        >
                            <motion.button
                                type="button"
                                onClick={() => openChat()}
                                whileHover={{ y: -1 }}
                                whileTap={{ scale: 0.98 }}
                                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-white shadow-card transition-colors hover:bg-[#1f2937]"
                            >
                                Try the live demo
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                            </motion.button>

                            <motion.button
                                type="button"
                                onClick={() => openChat("I'd like to book a free demo.")}
                                whileHover={{ y: -1 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-3.5 text-sm font-medium text-primary shadow-soft transition-colors hover:bg-section"
                            >
                                <CalendarCheck className="h-4 w-4 text-accent" />
                                Book a free demo
                            </motion.button>
                        </motion.div>

                        <motion.ul
                            {...fadeUp(0.32)}
                            className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
                        >
                            {proof.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-2 text-sm text-secondary"
                                >
                                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent/10">
                                        <Sparkles className="h-2.5 w-2.5 text-accent" />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </motion.ul>
                    </div>

                    {/* ---------- Right: live activity visual ---------- */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
                        className="relative mx-auto w-full max-w-md px-3 py-8 md:max-w-none md:px-6"
                    >
                        <div
                            aria-hidden
                            className="absolute inset-x-6 inset-y-10 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/15 via-transparent to-violet-500/15 blur-2xl"
                        />

                        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-lift">
                            <div className="flex items-center gap-3 border-b border-border bg-section px-5 py-4">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
                                    <MessageCircle className="h-4 w-4 text-white" strokeWidth={2} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-primary">
                                        Bright Smile Dental
                                    </p>
                                    <p className="text-xs text-secondary">AI assistant</p>
                                </div>
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                    Live
                                </span>
                            </div>

                            <ul className="divide-y divide-border">
                                {activity.map((item, i) => (
                                    <motion.li
                                        key={item.title}
                                        initial={{ opacity: 0, x: 12 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.7 + i * 0.55,
                                            ease: EASE,
                                        }}
                                        className="flex items-start gap-3.5 px-5 py-4"
                                    >
                                        <span
                                            className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${toneClass[item.tone]}`}
                                        >
                                            <item.icon className="h-4 w-4" />
                                        </span>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-sm font-medium text-primary">
                                                {item.title}
                                            </p>
                                            <p className="mt-0.5 text-[13px] leading-snug text-secondary">
                                                {item.detail}
                                            </p>
                                        </div>
                                        <span className="shrink-0 pt-0.5 text-xs text-secondary">
                                            {item.time}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="flex items-center justify-between border-t border-border bg-section px-5 py-3 text-xs text-secondary">
                                <span>Handled overnight. No staff needed.</span>
                                <span className="opacity-70">Illustrative example</span>
                            </div>
                        </div>

                        {/* Floating chips */}
                        <motion.div
                            animate={reduce ? undefined : { y: [0, -7, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute right-0 top-0 flex items-center gap-2 rounded-xl border border-border bg-white px-3.5 py-2.5 shadow-card md:-right-2"
                        >
                            <FaWhatsapp className="h-4 w-4 text-[#25D366]" />
                            <span className="text-xs font-medium text-primary">
                                WhatsApp &amp; website
                            </span>
                        </motion.div>

                        <motion.div
                            animate={reduce ? undefined : { y: [0, 7, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-0 left-0 flex items-center gap-2 rounded-xl border border-border bg-white px-3.5 py-2.5 shadow-card md:-left-4"
                        >
                            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-violet-50">
                                <Zap className="h-3.5 w-3.5 text-violet-600" />
                            </span>
                            <span className="text-xs font-medium text-primary">
                                Replies in seconds
                            </span>
                        </motion.div>
                    </motion.div>
                </div>

                {/* ---------- Industries strip ---------- */}
                <motion.div
                    {...fadeUp(0.4)}
                    className="mt-14 border-t border-border pt-8 md:mt-20"
                >
                    <p className="text-center text-xs font-medium uppercase tracking-[0.14em] text-secondary">
                        Built for service businesses
                    </p>
                    <ul className="mt-5 flex flex-wrap justify-center gap-2.5">
                        {industries.map(({ icon: Icon, label }) => (
                            <li
                                key={label}
                                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm text-primary shadow-soft"
                            >
                                <Icon className="h-4 w-4 text-accent" />
                                {label}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}