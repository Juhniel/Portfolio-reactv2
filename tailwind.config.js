/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      'primary': ['Playfair Display', 'sans-serif'],
      'secondary': ['Rajdhani', 'sans-serif'],
      'tertiary': ['Playfair Display', 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: "#baffcd",
      },
      backgroundImage: {
        // site: "url('./assets/oresundsbron.avif')",
        // about: "url('./assets/selfie2.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};