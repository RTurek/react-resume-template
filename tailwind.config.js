const colors = require('tailwindcss/colors')

// https://tailwindcss.com/docs/theme
module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/**/*.{js,jsx,ts,tsx}'
  ], // Purge all unused/unwanted css in production
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px'
    },
    fontFamily: {
      // sans: ['Graphik', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    },
    colors: {
      primary: '#0099ff',
      secondary: '#ff9900'
    },
    extend: {}
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
