/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        primaryDark: "#1D4ED8",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        gray: '#E4E6EA',
        grayText: '#6b6b6b'
      },
    },
  },
  plugins: [],
}