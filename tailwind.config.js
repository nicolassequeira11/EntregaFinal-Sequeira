/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        myred: "#e50000",
        mywhite: "#f7f8f9",
        myblack: "#333333"
      },
      fontFamily:{
        RobotoCondensed: ["Roboto Condensed", "sans-serif"]
      }
    },
  },
  plugins: [],
}

