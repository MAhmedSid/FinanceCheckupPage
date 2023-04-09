/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'body':['Poppins', 'sans-serif']
      },
      gradientColorStops:{
        "primary":["#404EED","#1D236D"]
      }
    },
  },
  plugins: [],
}

