/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A2540",
        charcoal: "#333333",
        light: "#F5F7FA",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        secondary: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
