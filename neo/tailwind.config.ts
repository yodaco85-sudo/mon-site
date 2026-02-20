import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#001F3F",
        ocean: "#0074D9",
        "ocean-light": "#1a8fe8",
        "ocean-dark": "#005ba8",
        gold: "#C8A84E",
        "gold-light": "#d9be6e",
        cream: "#FFF8E7",
        "slate-sea": "#1e3a5f",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
      backgroundImage: {
        "wave-gradient": "linear-gradient(135deg, #001F3F 0%, #1e3a5f 50%, #0074D9 100%)",
        "hero-gradient": "linear-gradient(160deg, #001F3F 0%, #003366 60%, #0a4d8c 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
