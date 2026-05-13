export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F4F0E6',
        parchment: '#EAE4D4',
        fridge: '#E2EBE2',
        ink: '#1A1714',
        muted: '#7A7065',
        sage: {
          DEFAULT: '#2F6B50',
          50: '#EEF4F0',
          100: '#D4E8DC',
          600: '#2F6B50',
          700: '#1E4A36',
          900: '#0F2A1E',
        },
        clay: {
          DEFAULT: '#CE5A28',
          50: '#FDF1EB',
          100: '#F8D9C9',
          600: '#CE5A28',
          700: '#A84420',
        },
        rule: '#CFC8B8',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
      },
    }
  },
  plugins: [],
}
