/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#0f172a",
        mainBlue: "#4a74f4",
        mainRed: "#d72540",
        main_orange:"#f15b28"

      }
    },
  },
  plugins: [require("daisyui")],
};
