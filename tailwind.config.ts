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
          ink: "hsl(var(--brand-ink))",
          navy: "hsl(var(--brand-navy))",
          slate: "hsl(var(--brand-slate))",
          accent: "hsl(var(--brand-accent))",
          "accent-bright": "hsl(var(--brand-accent-bright))",
          "accent-soft": "hsl(var(--brand-accent-soft))",
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
          "clamp(2.75rem, 5vw + 1rem, 4rem)",
          { lineHeight: "1.05", letterSpacing: "-0.03em" },
        ],
        h1: [
          "clamp(2.25rem, 3.5vw + 0.5rem, 3rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        h2: [
          "clamp(1.75rem, 2.5vw + 0.5rem, 2.5rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em" },
        ],
        h3: [
          "1.25rem",
          { lineHeight: "1.3", letterSpacing: "-0.01em" },
        ],
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
