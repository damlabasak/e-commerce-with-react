/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        productPriceBgColor:'rgb(11 11 12 / 50%)',
      }
    },
  },
  plugins: [],
}