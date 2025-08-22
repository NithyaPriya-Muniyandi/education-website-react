/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       keyframes: {
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        bounceSlow: "bounceSlow 2s infinite ease-in-out",
      },
    },
  },
  plugins: [],
}
