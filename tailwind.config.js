/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      // bungee: [['Bungee', 'cursive'],['Merriweather', 'serif'], ['Montserrat', 'sans-serif'] ,['Sacramento', 'cursive']],
      mons: [['Montserrat', 'sans-serif'], ['Sacramento', 'cursive']]
    },
    extend: {},
  },
  plugins: [],
}