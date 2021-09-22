module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      "1/6": "calc(100% / 6)",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
