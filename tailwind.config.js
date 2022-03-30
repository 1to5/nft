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
        300: "#00CBF8",
        400: "#60B0B5",
        500: "#00A6B3",
        600: "#0B1F36",
      },
      gray: {
        50: "#FFFFFF",
        800: "#21404D",
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
