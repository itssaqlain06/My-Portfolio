/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#020202',
        'green': '#2bcf7e',
        'light-grey': '#D9D9D9'
      },
    },

  },
  plugins: [
  ],
  server: {
    port: 3000,
  },

}