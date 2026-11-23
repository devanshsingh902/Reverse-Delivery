/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        railway: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985',
          800: '#1b3b6f',
          900: '#0f2547',
          950: '#0a172c'
        },
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          500: '#2563eb',
          800: '#1e3a8a',
          900: '#0f172a'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 30px rgba(27, 59, 111, 0.06)',
        'premium': '0 12px 32px -4px rgba(15, 23, 42, 0.08)'
      }
    },
  },
  plugins: [],
}
