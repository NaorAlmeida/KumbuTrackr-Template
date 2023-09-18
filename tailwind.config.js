/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const rotateY = plugin(function({ addUtilities }) {
  addUtilities ({
    ".rotate-y-180" : {
      transform: "rotateY(180deg)"
    },
    ".-rotate-y-180" : {
      transform: "rotateY(-180deg)"
    },
  })
})

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary": "#01051e",
        "color-primary-light": "#020726",
        "color-primary-dark": "#010417",
        "color-secondary": "#ff7d3b",
        "color-gray": "#333",
        "color-blob": "#a427df",
        "color-blue": "#0035A4",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          md: "50px"
        }
      }
    },
  },
  plugins: [],
}