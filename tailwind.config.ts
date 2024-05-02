import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        default : 'Calibri, Arial, Helvetica, sans-serif',
      },
      colors: {
        'advisor': '#4FAFAE',
        'online': '#4FAFAE',
        'offline': '#CCC',
      },
    },
  },
  plugins: [],
};
export default config;
