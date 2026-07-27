import { navLinks } from "@/lib/data";
import Image from "next/image";


export default function Footer() {
    return (
        <footer className="border-t border-border py-10">
            <div className="container-content flex flex-col items-center justify-between gap-6 md:flex-row">
                <a href="#" className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="ManishAI logo"
                        width={60}
                        height={60}
                        priority
                    />
                    {/* <span className="text-[15px] font-semibold tracking-tight text-primary">
                   ManishAI
                 </span> */}
                </a>

                <ul className="flex flex-wrap items-center justify-center gap-6">
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

                <p className="text-xs text-secondary">
                    © {new Date().getFullYear()} Built by ManishAI
                </p>
            </div>
        </footer>
    );
}
