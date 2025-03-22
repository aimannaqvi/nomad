/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        title: ['var(--font-alex-brush)', 'cursive'],
        sans: ['var(--font-playfair)', 'serif'],
        hand: ['var(--font-caveat)', 'cursive']
      },
      colors: {
        paper: 'rgb(var(--paper) / <alpha-value>)', 
        cream: 'rgb(var(--cream) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        sepia: {
          DEFAULT: 'rgb(var(--sepia) / <alpha-value>)',
          light: 'rgb(var(--sepia-light) / <alpha-value>)',
          dark: 'rgb(var(--sepia-dark) / <alpha-value>)'
        },
        accent: '#bc7246',
      },
      boxShadow: {
        'vintage': '2px 2px 4px rgba(0, 0, 0, 0.05), -2px -2px 4px rgba(255, 255, 255, 0.5)',
        'vintage-hover': '3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.6)',
        'postcard': '0 1px 3px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(140, 130, 115, 0.2)',
      },
      backgroundImage: {
        'paper-texture': "url('/images/paper-texture.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
} 