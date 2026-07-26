"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-sm transition-colors duration-300 ${
        scrolled ? "border-border" : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-[13px] font-semibold text-white">
            M
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-primary">
            ManishAI
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-secondary transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-lg bg-primary px-4 py-2 text-[14px] font-medium text-white shadow-softer transition-all hover:bg-black/85 active:scale-[0.98]"
        >
          Book Demo
        </a>
      </nav>
    </header>
  );
}
