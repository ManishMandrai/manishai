"use client";

import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import WhatsAppCard from "./WhatsAppCard";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
            <div
                className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px]"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 50% at 50% -10%, rgba(37,99,235,0.06), transparent)",
                }}
            />

            <div className="container-content grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-12">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-section px-4 py-1.5 text-xs font-medium text-secondary"
                    >
                        <Sparkles className="h-3.5 w-3.5 text-accent" />
                        AI Automation for Modern Businesses
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[2.5rem] font-bold leading-[1.1] tracking-tight text-primary md:text-6xl"
                    >
                        Never Miss Another Customer Again.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-6 max-w-prose text-lg leading-relaxed text-secondary"
                    >
                        I build AI assistants that answer customers, qualify leads,
                        automate repetitive work and help businesses respond instantly,
                        24/7.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-9 flex flex-col gap-3 sm:flex-row"
                    >
                        <motion.a
                            href="https://wa.me/918435428491"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-medium text-white shadow-soft transition-colors hover:bg-[#1fb959]"
                        >
                            <FaWhatsapp className="h-6 w-6" />
                            Chat on WhatsApp
                        </motion.a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="flex justify-center md:justify-end"
                >
                    <WhatsAppCard />
                </motion.div>
            </div>
        </section>
    );
}
