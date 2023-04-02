/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/forest-mobile-ui/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.12rem',
        base: '0.16rem',
        xl: '0.2rem',
        '2xl': '0.24rem',
        '3xl': '0.28rem',
        '4xl': '0.32rem',
        '5xl': '0.36rem',
        '6xl': '0.4rem',
        '7xl': '0.44rem',
        '8xl': '0.48rem',
        '9xl': '0.52rem',
      },
      spacing: {
        1: "0.04rem",
        2: "0.08rem",
        3: "0.12rem",
        4: "0.16rem",
        5: "0.2rem",
      },
      colors: {
        primary: "#0EB6FF",
      }
    }
  },
  plugins: [],
}

