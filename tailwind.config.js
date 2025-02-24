/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-primario': '#4169E1',
        'azul-secundario': '#6495ED',
        'azul-hover': '#3158d3',
        'cinza-claro': '#e9ecef',
        'cinza-texto': '#6c757d'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}