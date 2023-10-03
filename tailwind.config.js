/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      "green-gray": "#EDEDED",
      green: "#329A93",
      lightGray: "#B9B9B9",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
