/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {
        animation: {
          'spin-slow': 'spin 12s linear infinite',
        },
      },
    },
    plugins: [],
  }
  