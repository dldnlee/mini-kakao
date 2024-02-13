/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#fee501",
        "secondary" : "#abc0d1",
      }
    },
  },
  plugins: [],
}

