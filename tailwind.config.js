/** @type {import('tailwindcss').Config} */
export default {
  content: ['./views/**/*.pug'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        cerulean: '#006992',
        mint:'#62A87C',
        orange: '#F3A712',
      },},
  },
  darkMode: 'class',
  plugins: [],
}

