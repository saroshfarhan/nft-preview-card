/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        soft_blue: "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        cyan_hover: "rgba(0, 255, 247, 0.4)",
        mainBG: "hsl(217, 54%, 11%)",
        cardBg: "hsl(216, 50%, 16%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Outfit"],
    },
  },
  plugins: [],
};
