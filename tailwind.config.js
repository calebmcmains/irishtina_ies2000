/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk}"],
  theme: {
    extend: {
      colors: {
        iesGreen: "#39b54a",
        "iesGreen-light": "#61c46e",
        "iesGreen-lightest": "#ebf8ed",
      },
    },
  },
  plugins: [],
};
