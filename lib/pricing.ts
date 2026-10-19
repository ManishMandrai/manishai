/* ------------------------------------------------------------------ */
/* EDIT ME. These prices are PLACEHOLDERS, not a recommendation.       */
/* Set numbers you can deliver profitably (your time, AI usage costs,  */
/* hosting) and check each feature is something you can really ship.   */
/* The website AND the chatbot both read from this file.               */
/* ------------------------------------------------------------------ */

export type Plan = {
  id: string;
  name: string;
  tagline: string;
  prefix?: string; // e.g. "from"
  setup: string;
  monthly: string;
  highlighted?: boolean;
  badge?: string;
  inherits?: string; // shows "Everything in X, plus:"
  features: string[];
  cta: string;
  ctaMessage: string; // sent to the chat when the button is clicked
};

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "A website assistant that answers customers 24/7.",
    setup: "$600",
    monthly: "$149",
    features: [
      "Trained on your services, prices and FAQs",
      "Website chat widget in your brand colours",
      "Replies in the customer's language",
      "Up to 500 conversations a month",
      "Email support",
    ],
    cta: "Get started",
    ctaMessage: "I'm interested in the Starter plan.",
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Website and WhatsApp, with booking and lead qualification.",
    setup: "$1,500",
    monthly: "$349",
    highlighted: true,
    badge: "Recommended",
    inherits: "Starter",
    features: [
      "WhatsApp Business assistant (Meta setup handled with you)",
      "Appointment booking with calendar sync",
      "Lead qualification with a summary of every lead",
      "Up to 2,000 conversations a month",
      "Monthly conversation review and tuning",
      "Priority support",
    ],
    cta: "Book a free demo",
    ctaMessage: "I'm interested in the Growth plan.",
  },
  {
    id: "custom",
    name: "Custom",
    tagline: "For multiple locations, integrations and higher volumes.",
    prefix: "from",
    setup: "$3,500",
    monthly: "$699",
    inherits: "Growth",
    features: [
      "Multiple locations or brands",
      "CRM and Google Sheets integrations",
      "Review requests and follow-up automation",
      "Custom workflows built around your process",
      "Volume above 2,000 conversations a month",
      "Dedicated support and a shared roadmap",
    ],
    cta: "Talk to me",
    ctaMessage: "I'd like a custom quote.",
  },
];

export const pricingNotes = [
  "Prices in USD. GBP and INR quotes on request.",
  "WhatsApp message fees are billed by Meta at its published rates, separately.",
  "Every plan starts with a free demo call.",
];