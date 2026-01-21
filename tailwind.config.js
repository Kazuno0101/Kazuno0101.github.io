/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FDFBF7',
        'charcoal': '#2D2D2D',
        'cool-gray': '#6B7280',
        'pastel-yellow': '#FFD166',
        'soft-watermelon': '#EF476F',
        'soft-blue': '#118AB2',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
