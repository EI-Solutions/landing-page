/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ei-dark-green': '#004244',
        'ei-green': '#22C68A',
        'ei-light-green': '#BEE3D3',
        'ei-darker-green': '#00383A',
        'subtitle-gray': '#BCBCBC',
        'ei-black-green': '#012424',
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(farthest-corner at 300px 400px, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('tailwindcss')],
};
