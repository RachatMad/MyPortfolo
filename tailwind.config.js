/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#b54769',
        secondary: 'rgb(167, 110, 221)',
        dark: '#021526',
        darkNav: '#1A2130',
        gray: '#6B7280',
        // Light mode colors
        light: {
          bg: '#ffffff',
          card: '#f8fafc',
          nav: '#ffffff',
          text: '#1e293b',
          textSecondary: '#64748b',
          border: '#e2e8f0',
          accent: '#f1f5f9'
        },
        // Dark mode colors
        dark: {
          bg: '#021526',
          card: '#1A2130',
          nav: '#1A2130',
          text: '#ffffff',
          textSecondary: '#94a3b8',
          border: '#334155',
          accent: '#0f172a'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
