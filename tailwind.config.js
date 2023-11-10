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
      },
      animation: {
        fade: 'fadeOut 0.5s ease-in-out'
      },
      keyframes: () => ({
        fadeOut: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      })
    }
  },
  plugins: []
}
