/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        onyx: '#0F0D0E',
        crimson: '#B3123A',
        'crimson-dark': '#8E0E2E',
        champagne: '#C9A66B',
        'champagne-light': '#E2CBA6',
        petal: '#FAF5F4',
        charcoal: '#2B2628',
        ink: '#1B1B1B',
        'ink-soft': '#3A3233',
      },
      fontFamily: {
        heading: ['"Aref Ruqaa"', 'serif'],
        body: ['"Tajawal"', 'sans-serif'],
      },
      borderRadius: {
        petal: '0 60% 0 60%',
        'petal-sm': '0 45% 0 45%',
      },
      boxShadow: {
        'soft': '0 12px 40px -12px rgba(15,13,14,0.35)',
        'glow': '0 0 0 1px rgba(201,166,107,0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
};
