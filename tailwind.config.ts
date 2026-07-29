import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // CareRelay design system tokens (tokens/colors.css in the app repo).
        brand: {
          night: "#203A43", // Azul noche — headings, nav
          care: "#2A7F78", // Verde cuidado — primary actions
          carePressed: "#226A64",
          careSoft: "#EAF5F3",
          mint: "#DDF2EC", // soft informational backgrounds
          sand: "#F5F1E8", // warm, human context sections
          coral: "#D66A5E", // attention accent (never used as an error color)
          coralSoft: "#F9ECEA",
          ink: "#17252A", // high-contrast body text
          mist: "#D8E2E1", // dividers, disabled states
          mistSoft: "#EDF2F1",
          slate: "#5A6E74", // secondary text
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
