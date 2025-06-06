// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      marathi: ['"Tiro Devanagari Marathi"', 'serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      tiltwarp: ['"Tilt Warp"', 'cursive'],
      poetsen: ['"Poetsen One"', 'sans-serif'],
    },
  },
  plugins: [
      require('@tailwindcss/aspect-ratio')
  ],
}
