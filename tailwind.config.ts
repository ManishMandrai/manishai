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
        card: "#FFFFFF",
        border: "#EAEAEA",
        primary: "#111111",
        secondary: "#666666",
        accent: "#2563EB",
        success: "#16A34A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        "8xl": "1440px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,0.03), 0 8px 24px rgba(0,0,0,0.04)",
        softer: "0 1px 3px rgba(0,0,0,0.02)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
