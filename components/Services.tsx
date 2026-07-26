"use client";

import { motion } from "framer-motion";
import { Headset, ClipboardList, CalendarCheck, Workflow } from "lucide-react";

const services = [
  {
    icon: Headset,
    title: "AI Receptionist",
    description: "Answers customers instantly.",
  },
  {
    icon: ClipboardList,
    title: "Lead Qualification",
    description: "Collects customer details automatically.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Booking",
    description: "Books meetings without manual work.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description: "Integrates with your existing workflow.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-8xl px-6 py-24 lg:px-10 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl text-center"
        >
          <h2 className="text-[32px] font-bold tracking-tight text-primary sm:text-[38px]">
            What I build
          </h2>
          <p className="mt-4 text-[16px] font-medium text-secondary">
            Four systems that quietly run in the background of your business.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-section transition-colors duration-300 group-hover:bg-accent/10">
                  <Icon
                    size={20}
                    strokeWidth={1.75}
                    className="text-primary transition-colors duration-300 group-hover:text-accent"
                  />
                </div>
                <h3 className="mt-6 text-[16px] font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 text-[14px] font-medium leading-relaxed text-secondary">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
