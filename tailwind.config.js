/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#ea580c',
        grey: '#334155',
        dark: '#020617',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}