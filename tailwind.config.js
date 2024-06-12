/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "col-mint-cream": "#F1FFF9",
        "col-light-black": "#3F3F46",
        "col-silver": "#71717A",
        "col-light-gray": "#D4D4D8",
        "col-violet": "#751BE9",
        "col-violet-light": "CFA1FC33",
      },
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "900px",
      lg: "1200px",
      xl: "1600px",
    },
  },
  plugins: [],
};
