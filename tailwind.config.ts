import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
        },
        accent: {
          DEFAULT: '#E94560',
          hover: '#D63D56',
          light: '#E94560',
        },
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'progress': 'progress 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(233, 69, 96, 0.3), 0 0 20px rgba(233, 69, 96, 0.1)' },
          '100%': { boxShadow: '0 0 10px rgba(233, 69, 96, 0.5), 0 0 40px rgba(233, 69, 96, 0.2)' },
        },
        progress: {
          '0%': { width: '0%' },
          '50%': { width: '70%' },
          '100%': { width: '100%' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config

