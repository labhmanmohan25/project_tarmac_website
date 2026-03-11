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
        // Light mode palette
        sand: {
          50: "#faf9f7",
          100: "#f5f3ef",
          200: "#eeebe6",
          300: "#e5e0d8",
          400: "#d0c9be",
        },
        ink: {
          900: "#1c1c1e",
          800: "#2c2c2e",
          700: "#3a3a3c",
          500: "#636366",
          400: "#8e8e93",
          300: "#aeaeb2",
        },
        // Keep dark palette for CTA / footer
        navy: {
          950: "#050e1f",
          900: "#0A1628",
          800: "#0d1f3c",
        },
        flame: {
          500: "#F97316",
          400: "#FB923C",
        },
        cream: "#F8F4EE",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "sans-serif"],
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin-slow 25s linear infinite",
        "spin-reverse": "spin-reverse 35s linear infinite",
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite 2.5s",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        shimmer: "shimmer 5s linear infinite",
      },
      keyframes: {
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.85" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% center" },
          "100%": { backgroundPosition: "250% center" },
        },
      },
    },
  },
  plugins: [],
};
