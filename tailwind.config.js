module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      cinza: '#e2e8f0',
      goldenzin: '#F2CDAO',
      golden: '#BF8F65',
      primary: '#0D0D0D',
      secondary: '#D95323',
      blue: '#0388A6',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
