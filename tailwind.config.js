/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        shadeBlack:
          "linear-gradient(rgba(27, 30, 36, 0) 0%, rgb(27, 30, 36) 84.21%)",
        textColor: "rgba(2, 6, 12, 0.75)",
        subtitles: "rgba(2, 6, 12, 0.6)",
      },
    },
    fontFamily: {
      text: ["ProximaNova", "arial", "Helvetica", "Neue", "sans-serif"],
      title: ["ProximaNovaCond-Black"],
    },
  },
  plugins: [],
};
