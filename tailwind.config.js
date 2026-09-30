/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF6EF',
        paper: '#FFFDF7',
        ink: '#16150F',
        char: '#1E1D17',
        lime: '#D8FF3E',
        acid: '#C6F52E',
        lav: '#D9D2FF',
        peach: '#FFD9C2',
        mint: '#D6F3E3',
        butter: '#FFF3B0',
        clay: '#2A2923',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        hand: ['var(--font-hand)', 'cursive'],
      },
      letterSpacing: { tightest: '-0.07em' },
    },
  },
  plugins: [],
};
