/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "sm" : "480px"
      },
      spacing: {
        "big" : "28rem"
      }
    },
    fontFamily: {
      nunito: ['Nunito'],
    }
  },
  plugins: [],
}

