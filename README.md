# ManishAI

Single-page marketing site for an AI automation consultancy, built with Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion and Lucide React.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
app/
  layout.tsx       root layout, fonts, metadata
  page.tsx          assembles the page from sections
  globals.css       base styles, focus states, reduced-motion
components/
  Navbar.tsx
  Hero.tsx
  ChatMockup.tsx     browser + chat mockup used in the hero
  SocialProof.tsx
  Services.tsx
  HowItWorks.tsx
  About.tsx
  CTA.tsx
  Footer.tsx
```

## Notes

- Replace the WhatsApp `https://wa.me/` links and `mailto:hello@manishai.com` with real contact details before deploying.
- Replace the "Photo of Manish" placeholder in `components/About.tsx` with a real `next/image`.
- Colors and type scale live in `tailwind.config.ts` under `theme.extend.colors`.
