/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        maxHeight: {
          '0': '0',
          'fit': 'fit-content',
        },
        transitionProperty: {
          'height': 'height',
        },
        colors: {
            bgYello: '#fbffa7',
            bgGreen : '#b6ffc0',
            bgBlue: '#b1c5ff',
            bgPink: '#d5b3ff',
            textBlue: '#0000ff',
            textOrange: '#ff764d'
        },
        backgroundImage: {
          'header': "url('./assets/header.avif')",
        },
      },
    },
    plugins: [],
  }
