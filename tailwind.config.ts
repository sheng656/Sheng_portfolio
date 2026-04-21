import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        display: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        base: {
          bg: "rgb(var(--color-bg) / <alpha-value>)",
          surface: "rgb(var(--color-surface) / <alpha-value>)",
          elevated: "rgb(var(--color-elevated) / <alpha-value>)",
          border: "rgb(var(--color-border) / <alpha-value>)",
        },
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        surface: {
          950: "#06080f",
          900: "#0d1220",
          800: "#161d31",
          700: "#1f2942",
          200: "#d9dfeb",
          100: "#edf1f7",
          50: "#f7f9fc",
        },
        accent: {
          50: "#ebfffb",
          100: "#ccfff4",
          200: "#99fce8",
          300: "#62f5d8",
          400: "#31e7c4",
          500: "#13c7a4",
          600: "#0ca084",
          700: "#0d7d69",
          800: "#105f51",
          900: "#104f44",
        },
        success: {
          500: "#22c55e",
        },
        warning: {
          500: "#f59e0b",
        },
      },
      backgroundImage: {
        texture: "var(--texture-overlay)",
        mesh: "radial-gradient(at 20% 20%, rgba(19, 199, 164, 0.18) 0px, transparent 45%), radial-gradient(at 80% 0%, rgba(49, 231, 196, 0.14) 0px, transparent 45%), radial-gradient(at 50% 80%, rgba(16, 95, 81, 0.22) 0px, transparent 50%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(19, 199, 164, 0.18), 0 20px 45px -24px rgba(19, 199, 164, 0.45)",
        lift: "0 22px 48px -24px rgba(6, 8, 15, 0.7)",
        soft: "0 10px 35px -18px rgba(9, 13, 25, 0.45)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotate(0deg)", opacity: "0.26" },
          "50%": { transform: "translate3d(0, -22px, 0) rotate(4deg)", opacity: "0.48" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 48%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        drift: "drift 16s ease-in-out infinite",
        reveal: "reveal 600ms ease-out both",
        blink: "blink 1s steps(1, end) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
