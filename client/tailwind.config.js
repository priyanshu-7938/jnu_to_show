/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'single': ['Single Day', 'cursive'],
        'mont': ['Montserrat', 'sans-serif'],
      },
      colors: {
        first: '#80BCBD',
        second: '#AAD9BB',
        third: '#D5F0C1',
        fourth: '#F9F7C9',
      },
    },
  },
  plugins: [],
}
