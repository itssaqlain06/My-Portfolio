/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#100E18',
        'pink': '#F50591',
        'blue': '#3934F1',
      },
    },

  },
  plugins: [
  ],
  server: {
    port: 3000,
  },

}