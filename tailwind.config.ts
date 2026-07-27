import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        section: "#FAFAFA",
        primary: "#111827",
        secondary: "#6B7280",
        accent: "#2563EB",
        border: "#E5E7EB",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
        prose: "640px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(17, 24, 39, 0.04), 0 4px 16px rgba(17, 24, 39, 0.04)",
        card: "0 1px 2px rgba(17, 24, 39, 0.04), 0 8px 24px rgba(17, 24, 39, 0.06)",
        lift: "0 4px 12px rgba(17, 24, 39, 0.06), 0 16px 40px rgba(17, 24, 39, 0.08)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
