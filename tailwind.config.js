/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#51BD90',
          50: '#D6EFE5',
          100: '#C7EADB',
          200: '#AADFC9',
          300: '#8CD3B6',
          400: '#6FC8A3',
          500: '#51BD90',
          600: '#3B9B73',
          700: '#2B7255',
          800: '#1C4A37',
          900: '#0D2119',
          950: '#050D09'
        },
        secondary: '#091926',
      },
    }
  },
  plugins: [],
}

