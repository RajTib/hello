/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
        },
        pink: {
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          900: '#831843',
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
        'fade-slide': 'fadeSlide 0.55s cubic-bezier(.22,.68,0,1.2) both',
        'pop-in': 'popIn 0.6s cubic-bezier(.175,.885,.32,1.275) both',
        shimmer: 'shimmer 2.5s ease-in-out infinite',
        'heart-float': 'heartFloat 2.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px) rotate(-3deg)' },
          '50%': { transform: 'translateY(-10px) rotate(3deg)' },
        },
        bounceSoft: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        fadeSlide: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        popIn: {
          '0%': { transform: 'scale(0) rotate(-10deg)' },
          '70%': { transform: 'scale(1.15) rotate(3deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)' },
        },
        shimmer: {
          '0%,100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        heartFloat: {
          '0%': { transform: 'translateY(0) scale(0.6)', opacity: '1' },
          '100%': { transform: 'translateY(-320px) scale(1.1)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
