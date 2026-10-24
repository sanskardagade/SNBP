/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purplebrand: "#3d2066",
        purpledark: "#2d1b4d",
        navy: "#3d2066",
        bluebrand: "#5c3d8f",
        gold: "#c9a227",
        goldlight: "#e4c04a",
        ink: "#2a1a3e",
        mist: "#f7f4fb"
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 55px rgba(61, 32, 102, 0.12)"
      }
    }
  },
  plugins: []
};
