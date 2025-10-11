/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Light accents
        indigo: { DEFAULT:'#4f46e5' },
        teal: { DEFAULT:'#14b8a6' },
        amber: { DEFAULT:'#f59e0b' },
        // Dark neon accents
        emerald: { DEFAULT:'#10b981' },
        cyan: { DEFAULT:'#06b6d4' },
        purple: { DEFAULT:'#a855f7' },
      },
      boxShadow: { soft:'0 10px 30px -12px rgba(0,0,0,.25)' }
    }
  },
  plugins: [],
}
