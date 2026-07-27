"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section className="bg-section py-24 md:py-28">
            <div className="container-content grid grid-cols-1 items-center gap-12 md:grid-cols-[220px_1fr] md:gap-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className="relative h-64 w-full overflow-hidden rounded-2xl border border-border bg-white shadow-soft sm:h-80 md:h-full md:aspect-square"
                >
                    <Image
                        src="/manish.png"
                        alt="Manish, founder of ManishAI"
                        fill
                        sizes="(min-width: 768px) 220px, 100vw"
                        className="object-cover"
                        priority
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                        Hi, I&apos;m Manish.
                    </h2>
                    <p className="mt-5 max-w-prose text-base leading-relaxed text-secondary">
                        I&apos;m a full-stack developer building practical AI automation
                        systems for small businesses.
                    </p>
                    <p className="mt-4 max-w-prose text-base leading-relaxed text-secondary">
                        My goal is simple: help businesses save time, respond faster and
                        never lose potential customers because someone wasn&apos;t
                        available to reply.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}