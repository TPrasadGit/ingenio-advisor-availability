import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        default : 'Calibri, Arial, Helvetica, sans-serif', // Creates a css class 'font-default'. Used for all text.
      },
      colors: {
        'advisor': '#4FAFAE', // Creates a css class 'text-advisor'. Used for Advisor name.
        'online': '#4FAFAE', // Creates a css class 'bg-online'. Used in Call and Chat buttons.
        'offline': '#CCC', // Creates a css class 'bg-offline'. Used in Call and Chat buttons.
      },
    },
  },
  plugins: [],
};
export default config;
