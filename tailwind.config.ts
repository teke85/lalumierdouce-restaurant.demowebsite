import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        lora: ['var(--font-lora)'],
        poppins: ['var(--font-poppins)'],
        ubuntu: ['var(--font-ubuntu)'],
        montserrat: ['var(--font-montserrat)'],
        oswald: ['var(--font-oswald)'],
        enchants: ['var(--font-ENCHANTS)'],
        ibarra: ['var(--font-ibarra)'],
        aboreto: ['var(--font-aboreto)'],
        Roashe: ['var(--font-Roashe'],
        antonio: ['var(--font-antonio'],
        jost: ['var(--font-jost'],
      },

    },
  },
  plugins: [],
};
export default config;
