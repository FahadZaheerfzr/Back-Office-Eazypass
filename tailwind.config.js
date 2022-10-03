/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        Roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
        Inter: ["Inter", ...defaultTheme.fontFamily.sans]

      },
    },
  },
  plugins: [],
}