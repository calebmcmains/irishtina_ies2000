/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk}"],
  theme: {
    extend: {
      colors: {
        iesGreen: "#39b54a",
        "iesGreen-light": "#61c46e",
        "iesGreen-lightest": "#ebf8ed",
        "slightly-white": "#fafafa",
      },
      backgroundImage: {
        "hero-image":
          "url('/public/images/filip-barna-SlIu4D_rTPo-unsplash.jpg')",
      },
      scale: {
        1025: "1.025",
      },
    },
  },
  plugins: [],
};
