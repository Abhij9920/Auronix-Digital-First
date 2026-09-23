import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#1F2022',
        gold: '#C8921E',
        ivory: '#F7F5F0',
        'clr-gray': '#7a7a74',
        'clr-line': '#e4e2dc',
        'clr-mid': '#c0beb8',
        'clr-dark': '#2a2a2c',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      transitionTimingFunction: {
        'ease-out-custom': 'cubic-bezier(.22, 1, .36, 1)',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fadeUp .85s cubic-bezier(.22, 1, .36, 1) both',
        'fade-up-delay': 'fadeUp .85s .22s cubic-bezier(.22, 1, .36, 1) both',
        'fade-in': 'fadeIn .38s ease both',
      },
    },
  },
  plugins: [],
};

export default config;
