const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./packages/*/**/*.{js,jsx,ts,tsx}"],
  darkMode: "false",
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("./packages/core")({
      colors: ["orange"],
      cssBase: true
    }),
  ],
};
