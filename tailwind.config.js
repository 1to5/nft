module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      }
    },
    colors: {
      blue: {
        50: "#E5F9FF",
        100: "#94D7DB",
        200: "#42D0EF",
        300: "#00CBF8",
        400: "#60B0B5",
        500: "#00A6B3",
        600: "#0B1F36",
        900: "#000E1F",
      },
      gray: {
        50: "#FFFFFF",
        100:"#F7F7F7",
        300:"#8D8D8D",
        600:"#455962",
        700:"#345564",
        800: "#21404D",
        900:"#000000",
      },
      indigo: {
        900: "#4F4C61",
      }

    },
  },
  plugins: [
    require("tailwindcss-radix")(),
  ],
};
