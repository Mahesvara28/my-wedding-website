/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ], // <-- Fixed: Added missing closing bracket here
  theme: {
    extend: {
      colors: {
        "warm-bg": "#F2EBE1", 
        "warm-cream": "#FAF6F0", 
        "warm-beige": "#E6DFD3",
        "warm-accent": "#A67B5B",
        "warm-dark": "#4A3B32",
        "warm-terracotta": "#C49A8A",
      },
      fontFamily: {
        script: ["var(--font-pinyon)", "cursive"], // Calligraphic/Formal Script for Names
        serif: ["var(--font-cormorant)", "serif"], // Traditional Serif for details
        sans: ["var(--font-montserrat)", "sans-serif"], // Clean sans for small text
      },
    },
  },
  plugins: [],
};

export default config;