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
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "bg-surface": "var(--bg-surface)",
        "gold-primary": "var(--gold-primary)",
        "gold-light": "var(--gold-light)",
        "gold-muted": "var(--gold-muted)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "border-gold": "var(--border-gold)",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        ticker: "ticker 30s linear infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201,168,76,0)" },
          "50%": { boxShadow: "0 0 20px 4px rgba(201,168,76,0.2)" },
        },
      },
      backdropBlur: {
        xs: "4px",
      },
    },
  },
  plugins: [],
};

export default config;
