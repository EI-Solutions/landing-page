/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ei-dark-green': '#004446',
        'ei-green': '#22C68A',
        'ei-light-green': '#BEE3D3',
      }
    },
  },
  plugins: [
    require('tailwindcss'),
  ]
}
