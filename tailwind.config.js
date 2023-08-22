/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        dark: '#1A01DA',
        light: '#A5D0F5',
        lighter: '#D4E5F4',
      }
    },
  },
  plugins: [],
}

