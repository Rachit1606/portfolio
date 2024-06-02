/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#4C4C4C",
        lightText: "#D1D1D1",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#85C7F2",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      }
    },
  },
  plugins: [],
}
