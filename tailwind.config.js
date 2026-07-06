/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Anek Telugu', 'sans-serif'],  
        handwriting: ['Caveat', 'cursive'],
      },
      colors: {
        'custom-green': '#3d9970',  
      },
    },
  },
  plugins: [],
}
