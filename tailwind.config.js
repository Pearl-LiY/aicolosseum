/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./webcolosseum-main/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          850: '#1f2937',
          900: '#111827',
          950: '#030712', // Deep background
        },
        trade: {
          up: '#10b981', // Emerald 500
          down: '#f43f5e', // Rose 500
          accent: '#3b82f6', // Blue 500
        },
        // Landing Page Colors
        'trae-green': '#36F097',
        'trae-green-dark': '#2BC47A',
      },
      fontFamily: {
        mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', 'sans-serif'],
      },
      animation: {
        'pulse-once': 'pulse-once 0.5s cubic-bezier(0.4, 0, 0.6, 1)',
        'fade-in': 'fadeIn 0.5s ease-out',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        'pulse-once': {
          '0%, 100%': { opacity: 1, backgroundColor: 'transparent' },
          '50%': { opacity: .8, backgroundColor: 'rgba(59, 130, 246, 0.1)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}