import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto flex max-w-8xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between lg:px-10">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-[11px] font-semibold text-white">
            M
          </span>
          <span className="text-[14px] font-semibold tracking-tight text-primary">
            ManishAI
          </span>
        </a>

        <div className="flex items-center gap-6">
          <a
            href="mailto:hello@manishai.com"
            aria-label="Email"
            className="text-secondary transition-colors hover:text-primary"
          >
            <Mail size={18} strokeWidth={1.75} />
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="text-secondary transition-colors hover:text-primary"
          >
            <Linkedin size={18} strokeWidth={1.75} />
          </a>
          <a
            href="https://github.com"
            aria-label="GitHub"
            className="text-secondary transition-colors hover:text-primary"
          >
            <Github size={18} strokeWidth={1.75} />
          </a>
        </div>

        <p className="text-[13px] font-medium text-secondary">
          © {new Date().getFullYear()} ManishAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
