import {
  Headset,
  ListChecks,
  CalendarClock,
  Workflow,
  Star,
  MessagesSquare,
  Search,
  Hammer,
  Plug,
  Rocket,
} from "lucide-react";

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

// NOTE: `title` + `description` are also read by the website chatbot
// (lib/chatPrompt.ts), so keep them accurate. Only list what you can deliver.
export const services = [
  {
    icon: Headset,
    title: "AI Receptionist",
    headline: "Answer every customer message instantly",
    description:
      "An assistant that answers customer questions around the clock on WhatsApp and your website.",
    bullets: [
      "Trained on your services, prices and FAQs",
      "Replies in seconds, day or night",
      "Passes tricky questions to you instead of guessing",
    ],
    bestFor: "Clinics, salons, home services",
  },
  {
    icon: ListChecks,
    title: "Lead Qualification",
    headline: "Know who's serious before you call",
    description:
      "Collects the details you need from every new enquiry before you step in.",
    bullets: [
      "Asks the right questions: need, budget, timing",
      "Sends you a clean summary of each lead",
      "Filters out time-wasters and spam",
    ],
    bestFor: "Estate agents, law firms, agencies",
  },
  {
    icon: CalendarClock,
    title: "Appointment Booking",
    headline: "Fill your calendar automatically",
    description:
      "Books, confirms and reminds, so your team doesn't have to.",
    bullets: [
      "Checks your real availability",
      "Confirms bookings and sends reminders to cut no-shows",
      "Handles reschedules and cancellations",
    ],
    bestFor: "Clinics, salons, consultants",
  },
  {
    icon: Star,
    title: "Reviews & Follow-ups",
    headline: "Win more five-star reviews",
    description:
      "Follows up after every visit or quote, so happy customers leave reviews and warm leads don't go cold.",
    bullets: [
      "Asks happy customers for a review after each visit",
      "Follows up on quotes and unanswered enquiries",
      "You approve the wording of every message",
    ],
    bestFor: "Local service businesses, e-commerce",
  },
  {
    icon: MessagesSquare,
    title: "Website + WhatsApp Chat",
    headline: "One assistant on every channel",
    description:
      "The same assistant on your website chat and your WhatsApp number, sharing one knowledge base.",
    bullets: [
      "A website chat widget that matches your brand",
      "Your WhatsApp Business number connected",
      "Update an answer once and it changes everywhere",
    ],
    bestFor: "Any business with a website and WhatsApp",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    headline: "Automate the busywork",
    description: "Custom AI workflows built around how your business already runs.",
    bullets: [
      "Saves leads to Google Sheets or your CRM",
      "Alerts your team the moment a lead is hot",
      "Connects to the tools you already use",
    ],
    bestFor: "Teams buried in manual follow-ups",
  },
];

export const steps = [
  {
    icon: Search,
    title: "Discover",
    when: "Day 1",
    description:
      "A free call to learn your business, the questions customers ask and how you take bookings.",
  },
  {
    icon: Hammer,
    title: "Build",
    when: "Days 2–4",
    description:
      "I train your assistant on your services, prices, tone of voice and FAQs.",
  },
  {
    icon: Plug,
    title: "Integrate",
    when: "Day 5",
    description:
      "I connect your website chat, WhatsApp and calendar, then we test it together.",
  },
  {
    icon: Rocket,
    title: "Launch",
    when: "Days 6–7",
    description: "Go live, with the first week closely monitored and tuned.",
  },
];

export const needs = [
  "Your FAQs, services and price list",
  "Opening hours and booking rules",
  "Calendar access (Google or similar)",
  "Your WhatsApp Business account (I help you set it up)",
];

export const afterLaunch = {
  title: "After launch",
  description:
    "I review real conversations each month, fix gaps and improve answers as your business changes.",
  bullets: [
    "Monthly conversation review",
    "New FAQs and offers added quickly",
    "A direct line to me, no ticket queues",
  ],
};

export const whatsappNote =
  "Website chat can go live within days. WhatsApp go-live depends on Meta's business approval, which I handle with you and which can add time.";

export const faqs = [
  {
    question: "How long does setup take?",
    answer:
      "Website chat is usually live within 5 to 7 business days. WhatsApp also depends on Meta's business approval, which I handle with you and which can add extra time.",
  },
  {
    question: "Can it work with my business?",
    answer:
      "Yes. Every assistant is built around your specific services, FAQs and booking process, so it fits how your business actually operates.",
  },
  {
    question: "Can it connect with WhatsApp?",
    answer:
      "Yes. WhatsApp is the primary channel we integrate with, alongside your website and existing tools, so conversations stay in one place.",
  },
  {
    question: "How much does it cost?",
    answer:
      "It depends on the channels and workflows you need. After a free demo you get a clear quote covering setup and monthly fees, with no hidden extras. Meta also charges separately for some WhatsApp messages, at its published rates.",
  },
  {
    question: "What if the assistant doesn't know the answer?",
    answer:
      "It is set up to say so and pass the enquiry to you rather than guess. You stay in control of what it can and can't say.",
  },
  {
    question: "Will customers know they're talking to an AI?",
    answer:
      "Yes. The assistant introduces itself as your business's AI assistant, which keeps things honest and builds trust. You choose its name and tone.",
  },
  {
    question: "Does it work in other languages?",
    answer:
      "English and Hindi work well, and the assistant can reply in the language the customer writes in. We test the languages that matter to you during setup.",
  },
  {
    question: "What happens to my customers' data?",
    answer:
      "Conversations are processed by an AI provider to generate replies, and I only keep what your workflow needs, like leads and bookings. I never sell data. See the Privacy page for details.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. Once live, I monitor performance and refine responses as your business changes, so the assistant keeps improving over time.",
  },
  {
    question: "How do we get started?",
    answer:
      "Book a free demo below. We'll walk through your business, map out the right automation, and outline next steps together.",
  },
];

export const whatsappMessages = [
  { from: "customer", text: "Hi, any 2BHK for rent?" },
  { from: "ai", text: "Yes! Which area, and your budget?" },
  { from: "customer", text: "Indiranagar, under 30k." },
  { from: "ai", text: "We have 3 matches. Site visit this week?" },
  { from: "customer", text: "Saturday morning works." },
  { from: "ai", text: "Booked! Sending details shortly." },
];