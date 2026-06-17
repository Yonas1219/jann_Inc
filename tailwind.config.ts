import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f7f6f1",
        foreground: "#1a1a1a",
        card: {
          DEFAULT: "#ffffff",
          foreground: "#1a1a1a",
        },
        muted: {
          DEFAULT: "#f0f0eb",
          foreground: "#6b7280",
        },
        primary: {
          DEFAULT: "#1a4d2e",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#e8a020",
          foreground: "#1a1a1a",
        },
        border: "#e5e5e0",
        ring: "#1a4d2e",
        green: {
          deep: "#1a4d2e",
          mid: "#2d6a4f",
          light: "#f0f7f2",
        },
        amber: {
          gold: "#e8a020",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(26, 77, 46, 0.06)",
        "card-hover": "0 12px 40px rgba(26, 77, 46, 0.12)",
      },
      maxWidth: {
        site: "1440px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
