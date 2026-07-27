import {
  Headset,
  ListChecks,
  CalendarClock,
  Workflow,
  Search,
  Hammer,
  Plug,
  Rocket,
} from "lucide-react";

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    icon: Headset,
    title: "AI Receptionist",
    description: "Answers customers instantly.",
  },
  {
    icon: ListChecks,
    title: "Lead Qualification",
    description: "Collects information before you step in.",
  },
  {
    icon: CalendarClock,
    title: "Appointment Booking",
    description: "Automates scheduling and reminders.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description: "Custom AI workflows built around your business.",
  },
];

export const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Understand your business.",
  },
  {
    icon: Hammer,
    title: "Build",
    description: "Train your AI assistant.",
  },
  {
    icon: Plug,
    title: "Integrate",
    description: "Connect WhatsApp and your workflow.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Go live within days.",
  },
];

export const faqs = [
  {
    question: "How long does setup take?",
    answer:
      "Most AI assistants are trained, tested and ready to go live within 5 to 7 business days, depending on the complexity of your workflows.",
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