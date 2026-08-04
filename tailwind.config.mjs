export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F7F5F1',
        surface: '#FFFFFF',
        ink: '#1C1917',
        mid: '#57534E',
        subtle: '#A8A29E',
        rule: '#E5E2DC',
        pine: {
          DEFAULT: '#166534',
          50: '#F0FDF4',
          100: '#DCFCE7',
          600: '#166534',
          700: '#15803D',
          900: '#14532D',
        },
        night: '#111827',
      },
      fontFamily: {
        sans: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
