/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        electric: {
          50: '#E6FDFF',
          100: '#CCFBFF',
          200: '#99F7FF',
          300: '#66F3FF',
          400: '#33EFFF',
          500: '#00D4FF',
          600: '#00A3CC',
          700: '#007A99',
          800: '#005266',
          900: '#002933',
        },
        performance: {
          50: '#FFE6EC',
          100: '#FFCCD9',
          200: '#FF99B3',
          300: '#FF668C',
          400: '#FF3366',
          500: '#FF0040',
          600: '#CC0033',
          700: '#990026',
          800: '#66001A',
          900: '#33000D',
        },
        luxury: {
          50: '#FFFEF0',
          100: '#FFFDE0',
          200: '#FFFBC2',
          300: '#FFF8A3',
          400: '#FFF685',
          500: '#FFD700',
          600: '#CCAC00',
          700: '#998100',
          800: '#665600',
          900: '#332B00',
        },
        success: {
          50: '#E6FFF3',
          100: '#CCFFE6',
          200: '#99FFCC',
          300: '#66FFB3',
          400: '#33FF99',
          500: '#00FF88',
          600: '#00CC6B',
          700: '#009950',
          800: '#006636',
          900: '#00331B',
        },
      },
      animation: {
        'ripple': 'ripple 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
      },
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00D4FF, 0 0 10px #00D4FF, 0 0 15px #00D4FF' },
          '100%': { boxShadow: '0 0 10px #00D4FF, 0 0 20px #00D4FF, 0 0 30px #00D4FF' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'blink-caret': {
          '0%, 50%': { 'border-color': 'transparent' },
          '51%, 100%': { 'border-color': '#00D4FF' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};