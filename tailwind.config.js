/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'hijaugaming': '#63eb6f',
        'hitamgaming': '#161616',
        'bghitamgaming': '#151515',
        'putihtext': '#f2f2f2'
      }
    },
  },
  plugins: [],
};
