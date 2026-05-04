/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#6C63FF',
          light: '#8B83FF',
          dark: '#5549E0',
        },
      },
    },
  },
  plugins: [],
}
