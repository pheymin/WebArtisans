/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*{html,js}',
    './pages/**/*.{html,js}',
    './js/*.{html,js}'
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      reemkufi: ['ReemKufi', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary-purple': '#a38ffd',
        'secondary-purple': '#4d2ec8',
        'tertiary-purple': '#805be8',
      }
    },
  },
  plugins: [require("daisyui")],
}

