/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        16: "repeat(auto-fit, minmax(160px, 1fr))",
      },
      gridAutoColumns: {
      },
    },
  },
  plugins: [],
};
