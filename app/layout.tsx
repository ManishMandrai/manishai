import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manishai.com"),
  title: "ManishAI — AI Automation for Modern Businesses",
  description:
    "I build AI assistants that answer customers, qualify leads, automate repetitive work and help businesses respond instantly, 24/7.",
  keywords: [
    "AI automation",
    "AI receptionist",
    "WhatsApp AI assistant",
    "lead qualification",
    "appointment booking automation",
    "business automation",
  ],
  openGraph: {
    title: "ManishAI — AI Automation for Modern Businesses",
    description:
      "I build AI assistants that answer customers, qualify leads, automate repetitive work and help businesses respond instantly, 24/7.",
    url: "https://manishai.com",
    siteName: "ManishAI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ManishAI — AI Automation for Modern Businesses",
    description:
      "I build AI assistants that answer customers, qualify leads, automate repetitive work and help businesses respond instantly, 24/7.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-background text-primary">
        {children}
      </body>
    </html>
  );
}
