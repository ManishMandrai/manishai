// A plain-language starting point, not legal advice. Have it reviewed
// (especially for UK/EU GDPR) before you rely on it, and keep it in sync
// with what your site and clients' assistants actually do.
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { DEMO_LINK } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Privacy — ManishAI",
  description: "How ManishAI handles messages, data and privacy.",
};

const sections = [
  {
    title: "The chat on this website",
    body: [
      "When you use the chat assistant on this site, your messages are sent to an AI provider (for example Google or Anthropic) so it can write a reply. The chat feature itself does not save your conversation on my servers.",
      "The AI provider processes your messages under its own terms and may keep them for a limited time. Please don't share passwords, payment details, health information or other sensitive data in the chat.",
    ],
  },
  {
    title: "Assistants I build for businesses",
    body: [
      "When I build an assistant for a business, the business decides what customer data it collects, such as enquiries and bookings. I process that data on the business's behalf, only to run and improve the assistant, and I only keep what the workflow needs.",
      "Conversations on WhatsApp are also subject to Meta's own terms and privacy policy.",
    ],
  },
  {
    title: "What I don't do",
    body: [
      "I don't sell conversation data, and I don't use it to advertise to you.",
      "This website doesn't use advertising or analytics cookies. If that changes, this page will be updated.",
    ],
  },
  {
    title: "Your choices and contact",
    body: [
      "You can ask what data I hold about you, ask me to correct or delete it, or ask any question about this policy. Message me on WhatsApp and I'll respond.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-border">
        <div className="container-content flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="ManishAI logo" width={60} height={60} />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-secondary transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to site
          </Link>
        </div>
      </header>

      <article className="container-content max-w-3xl py-16 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          Privacy
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary md:text-4xl">
          How your data is handled
        </h1>
        <p className="mt-4 text-base leading-relaxed text-secondary">
          Short version: your messages are used to answer you, I keep as little as
          possible, and I never sell it. Last updated 19 October 2026.
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-semibold text-primary">{section.title}</h2>
              <div className="mt-3 space-y-3">
                {section.body.map((p) => (
                  <p key={p} className="text-sm leading-relaxed text-secondary">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <a
          href={DEMO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center rounded-xl bg-primary px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1f2937]"
        >
          Contact me on WhatsApp
        </a>
      </article>
    </main>
  );
}