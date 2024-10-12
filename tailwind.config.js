/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      screens: {
        't1260px': { 'max': '1260px' },
        't1200px': { 'max': '1200px' },
        't1199px': { 'max': '1199px' },
        't1050px': { 'max': '1050px' },
        't950px': { 'max': '950px' },
        't767px': { 'max': '767px' },
        't580px': { 'max': '580px' },
        'a1250px': { 'min': '1250px' },
        'a1200px': { 'min': '1200px' },
      },
      keyframes: {
        'scrollX': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        'scrollX': 'scrollX 35s linear 0s infinite normal none running',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
