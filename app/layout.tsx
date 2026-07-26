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
  title: "ManishAI — Never Miss Another Customer Again",
  description:
    "AI assistants that answer enquiries, qualify leads, automate customer support and book appointments 24/7 — so your business never misses an opportunity.",
  openGraph: {
    title: "ManishAI — AI Automation for Small Businesses",
    description:
      "AI assistants that answer enquiries, qualify leads, automate customer support and book appointments 24/7.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "ManishAI — AI Automation for Small Businesses",
    description:
      "AI assistants that answer enquiries, qualify leads, automate customer support and book appointments 24/7.",
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
