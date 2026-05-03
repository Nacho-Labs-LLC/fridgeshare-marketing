export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#faf8f3',
        honey: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        warm: {
          50: '#fdfaf6',
          100: '#f7f0e4',
          200: '#ede0ca',
          700: '#6b4f35',
          800: '#4a3728',
          900: '#2d2015',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
