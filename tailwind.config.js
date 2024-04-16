/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,html}",
  ],
  theme: {
    extend: {
      colors: {
        'navbar-red': '#ed1a2d',
        'header-gray': '#4a536a',
        'checkbox-border': '#e8c6c6',
        'checkbox': '#fefafa',
        'check': '#bd111f',
        'inputBorder' : '#9198a6',
        'inputBg': '#eff3fb',
        'dropdownBg': '#dfe6fa',
        'dropdownSelected': '#1a365d'
      },
      width: {
        '75': '18.75rem',
        '42': '10.75rem',
      }
    },
  },
  plugins: [],
}

