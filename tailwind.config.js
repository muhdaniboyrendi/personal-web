/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        primary: '#03045E',
        secondary: '#0077B6',
        third: '#00B4D8',
        fourth: '#90E0EF',
        fifth: '#CAF0F8',
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

