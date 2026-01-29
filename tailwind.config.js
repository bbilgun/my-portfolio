/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f3e8ff",
          100: "#e9d5ff",
          200: "#d8b4fe",
          300: "#c084fc",
          400: "#a855f7",
          500: "#9333ea",
          600: "#7e22ce",
          700: "#6b21a8",
          800: "#581c87",
          900: "#3f0f5c",
        },
        background: {
          light: {
            primary: "#FAFBFF",
            secondary: "#F3F4F9",
            tertiary: "#E5E7EB",
          },
          dark: {
            primary: "#000000",
            secondary: "#0a0a0a",
            tertiary: "#0c001b",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-in-out",
        "slide-up": "slide-up 1s ease-in-out",
        "loader-dot": "loading 1s infinite alternate",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        loading: {
          "0%": { transform: "translateY(-15px)" },
          "100%": { transform: "translateY(5px)" },
        },
        move: {
          "0%": { transform: "translateX(50%)" },
          "50%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(50%)" },
        },
      },
    },
  },
  plugins: [],
};
