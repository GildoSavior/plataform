/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto'
      },
      colors: {
        green: {
          300: '#bb837e',
          300: '#bb875f',
          300: '#b15f43'
        },
        blue: {
          500: '#b108f7'
        },
        orange: {
          500: '#fba94c'
        },
        red: {
          500: '#f75a68'
        },
        gray: {
          100: '#e1e1e6',
          200: '#c4c4cc',
          300: '#114099',
          500: '#323238',
          600: '#29292e',
          700: '#33333a',
          900: '#31313a',
        }
      }
    },
  },
  plugins: [],
}