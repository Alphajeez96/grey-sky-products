/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#252526',
        'primary-green': '#377364',
        'primary-blue': '#375673',
        gray: '#E0E2E4'
      },
      fontFamily: {
        inter: 'Inter, sans-serif',
        bitter: 'Bitter, serif'
      }
    }
  },
  plugins: []
}
