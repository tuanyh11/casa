/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-800': '#303030',
        'blue-#2f316f': '#2f316f',
        'black-#303030': '#303030',
        'black-#333333': '#333333',
        'black-#222222': '#222222',
        'main': '#f598a4'
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
    },
  },
  plugins: [],
}
