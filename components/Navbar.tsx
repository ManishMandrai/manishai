"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { navLinks } from "@/lib/data";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();

        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || menuOpen
                    ? "border-b border-border bg-white/80 backdrop-blur-md"
                    : "border-b border-transparent bg-transparent"
                }`}
        >
            <nav className="container-content flex h-16 items-center justify-between md:h-20">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="ManishAI logo"
                        width={60}
                        height={60}
                        priority
                    />
                </a>

                {/* Desktop Navigation */}
                <ul className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-sm text-secondary transition-colors hover:text-primary"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop WhatsApp Button */}
                <motion.a
                    href="https://wa.me/918435428491"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="hidden items-center gap-2 rounded-xl bg-[#25D366] px-5 py-2 text-sm font-medium text-white shadow-soft transition-colors hover:bg-[#1fb959] md:inline-flex"
                >
                    <FaWhatsapp className="h-4 w-4" />
                    WhatsApp Us
                </motion.a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-primary md:hidden"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    {menuOpen ? (
                        <X className="h-5 w-5" />
                    ) : (
                        <Menu className="h-5 w-5" />
                    )}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden border-t border-border bg-white md:hidden"
                    >
                        <ul className="container-content flex flex-col gap-1 py-4">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="block py-2.5 text-[15px] text-secondary transition-colors hover:text-primary"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}

                            <li className="pt-2">
                                <a
                                    href="https://wa.me/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMenuOpen(false)}
                                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1fb959]"
                                >
                                    <FaWhatsapp className="h-4 w-4" />
                                    WhatsApp Us
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}