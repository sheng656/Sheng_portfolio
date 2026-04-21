import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
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
        mesh: "radial-gradient(at 20% 20%, rgba(19, 199, 164, 0.18) 0px, transparent 45%), radial-gradient(at 80% 0%, rgba(49, 231, 196, 0.14) 0px, transparent 45%), radial-gradient(at 50% 80%, rgba(16, 95, 81, 0.22) 0px, transparent 50%)",
      },
      boxShadow: {
        soft: "0 10px 35px -18px rgba(9, 13, 25, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
