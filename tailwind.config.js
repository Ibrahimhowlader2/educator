const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        'Nunito': ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#FD3D57',
        primaryGray: '#444444'
      },
      container: {
        center: true,
        padding: '1rem',
      }
    },
  },
  plugins: [],
}
