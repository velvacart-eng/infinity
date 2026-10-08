import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "hsl(var(--brand-navy))",
          slate: "hsl(var(--brand-slate))",
          accent: "hsl(var(--brand-accent))",
          "accent-dark": "hsl(var(--brand-accent-dark))",
          muted: "hsl(var(--brand-muted))",
          surface: "hsl(var(--brand-surface))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: [
          "clamp(2.25rem, 4vw + 0.5rem, 2.75rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em" },
        ],
        h1: [
          "clamp(1.75rem, 2.5vw + 0.5rem, 2rem)",
          { lineHeight: "1.2", letterSpacing: "-0.01em" },
        ],
        h2: [
          "clamp(1.5rem, 2vw + 0.25rem, 1.625rem)",
          { lineHeight: "1.25", letterSpacing: "-0.01em" },
        ],
        h3: [
          "1.125rem",
          { lineHeight: "1.35", letterSpacing: "-0.01em" },
        ],
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
