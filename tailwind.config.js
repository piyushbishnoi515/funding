/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1240px",
        }
      },
      backgroundImage: {
        'hero-bg': "url('./assets/images/webp/hero-bg.png')",
        'hero-small': "url('./assets/images/webp/hero-bg-smallscreen.png')",
      },
      colors: {
        'blue': "#4C57FF",
        'light-grey': "#0E1122",
        'grey': "#76767F",
        'Alabaster': " #EFECE6",
      },

      fontSize: {
        'custom-sm': "28px",
        'custom-lg': "30px",
        'custom-xxl': "62px",
        'custom-xl': "36px",
        'custom-2xl': "85px",
        'custom-3xl': "90px",

      },
      lineHeight: {
        'custom-lg': "30px",
        'custom-xxl': "66px",
        'custom-xl': "36px",
        'custom-2xl': "85px",
        'custom-3xl': "90px",
      },
      fontFamily: {
        'abril': "Abril Display, sans- serif",
        'poppins': "Poppins, sans-serif",
      },
    },
  },
  plugins: [],
}