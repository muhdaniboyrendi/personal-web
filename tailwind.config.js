/** @type {import('tailwindcss').Config} */

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
        primary_light: "#4CB9E7",
        primary_dark_light: "#3B9AC7",
        secondary_light: "#F1F8FC",
        accent: "#FF9B50",
        text_primary_light: "#2C3333",
        text_secondary_light: "#526D82",
        surface_light: "#FFFFFF",
        border_light: "#E3F2FD",
        primary_dark: "#186B9C",
        primary_dark_dark: "#145580",
        secondary_dark: "#1A1A1A",
        text_primary_dark: "#E6E6E6",
        text_secondary_dark: "#B0B0B0",
        surface_dark: "#2D2D2D",
        border_dark: "#404040",
      },
      fontFamily: {
        comfortaa: "Comfortaa",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

