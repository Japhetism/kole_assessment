import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'averta': ['Averta-Semibold', 'sans-serif'], // Add your custom font here
      },
      colors: {
        'custom-purple': '#551FFF', // Add your custom color
      },
      width: {
        'custom-sidebar': '214.68px', // Custom width
      },
      height: {
        'custom-sidebar': '760.19px', // Custom height
      },
    },
  },
  plugins: [],
};
export default config;
