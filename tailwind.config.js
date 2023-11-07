/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: colors.white,
        primary: colors.indigo,
        textColor: colors.gray
      }
    }
  },
  plugins: []
}
