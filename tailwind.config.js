/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FB8C00",
        secondary: "#636363",
        darkLike: "#252525",
        greyLike: "rgba(255, 255, 255, 0.1)",
        lightGrey: "#707070",
        gold: "#F0D17B",
      },
      fontFamily: {
        primary: ["Mulish", "sans-serif"],
        secondary: ["ocras", "sans-serif"],
        kurdi: ['"Scheherazade"', "serif"],
        arab: ["Tajawal", "sans-serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite", // Adjust speed as needed
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" }, // Shift entire width to scroll continuously
        },
        customBounce: {
          "0%, 100%": { transform: "translateY(-5px)" }, // Smaller jump
          "50%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "custom-bounce": "customBounce 1s ease-in-out infinite", // Slower duration
        "custom-bounce2": "customBounce 1.5s ease-in infinite", // Slower duration},
      },
    },
  },
  plugins: [],
};
