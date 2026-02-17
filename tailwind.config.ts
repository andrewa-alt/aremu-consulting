/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        primary: { // Nested structure for colors
          DEFAULT: '#0a0a0a', // Near-black background
          bg: '#0a0a0a', // Near-black background
        },
        secondary: {
          DEFAULT: '#141414', // Slightly lighter for depth
          bg: '#141414',
        },
        text: {
          primary: '#fafafa', // Warm white text
          secondary: '#a1a1a1', // Muted text
        },
        accent: {
          DEFAULT: '#b87333', // Copper accent
          hover: '#d48544', // Lighter accent for hover states
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'], 
        body: ['"Plus Jakarta Sans"', 'sans-serif'], 
      },
      fontSize: { 
        'display-xl': ['6rem', { lineHeight: '1.15', fontWeight: '700' }], 
        'display-lg': ['4rem', { lineHeight: '1.15', fontWeight: '700' }], 
        'display-md': ['3rem', { lineHeight: '1.15', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.75', fontWeight: '400' }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
}

module.exports = config;