/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Soft, warm light beige (Perfect middle ground)
        "warm-bg": "#F2EBE1", 
        // Slightly lighter cream for cards so they still pop
        "warm-cream": "#FAF6F0", 
        "warm-beige": "#E6DFD3",
        "warm-accent": "#A67B5B",
        "warm-dark": "#4A3B32",
        "warm-terracotta": "#C49A8A",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};