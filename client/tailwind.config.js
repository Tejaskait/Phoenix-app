/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js}',
    './src/**/*.{html,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nmregular:['Regular'],
        fgsemibold:['Semibold']
      }
    },
  },
  plugins: [],
}

