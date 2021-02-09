module.exports = {
  purge: ["./components/**/*.{js,jsx}", "./pages/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ["coolvetica"],
        secondary: ["gill-sans-nova"],
      },
    },
  },
  variants: {
    extend: {
      borderStyle: ["active", "focus"],
      borderColor: ["active"],
      borderWidth: ["focus"],
      boxShadow: ["active", "hover"],
      fontWeight: ["focus"],
    },
  },
  plugins: [],
};
