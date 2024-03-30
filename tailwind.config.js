/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        myred: "#c64343",
        mywhite: "#f7f8f9",
        myblack: "#333333",
        mybg: "#f7f8f9"
      },
      fontFamily:{
        RobotoCondensed: ["Roboto Condensed", "sans-serif"]
      }
    },
  },
  plugins: [],
}

