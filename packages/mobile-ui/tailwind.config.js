/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0EB6FF",
      },
      boxShadow: {
        'card': '0 0.01rem 0.09rem 0.01rem rgba(0,0,0,0.3)'
      }
    },
  },
  plugins: [],
}

