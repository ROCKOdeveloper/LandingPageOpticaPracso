/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 20px 20px rgba(0, 0, 0, 1)',
      }
    },
  },
  plugins: [],
}

