# ManishAI — Landing Page

A premium, minimal landing page for an AI automation agency, built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

## Deploy

Ready for one-click deployment on [Vercel](https://vercel.com/new). No environment variables or backend required.

## Structure

```
app/
  layout.tsx      Root layout, fonts, SEO metadata
  page.tsx        Assembles all sections
  globals.css     Tailwind base + small global rules
components/
  Navbar.tsx
  Hero.tsx
  WhatsAppCard.tsx
  Services.tsx
  HowItWorks.tsx
  About.tsx
  FAQ.tsx
  CTA.tsx
  Footer.tsx
lib/
  data.ts         Copy and content used across components
```

## Editing content

All copy (nav links, services, steps, FAQ, chat messages) lives in `lib/data.ts` — edit it there rather than inside components.

## Brand tokens

Colors and type are defined in `tailwind.config.ts` under `theme.extend.colors` (background, section, primary, secondary, accent, border) and mapped to the Inter font via `next/font/google`.
