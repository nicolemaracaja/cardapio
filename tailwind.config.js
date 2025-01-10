/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "home": "url('/asserts/bg.png')"
      }
    },
  },
  plugins: [],
}

