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
        bodyColor: "#05070e",
        lightText: "#c4cbd6",
        boxBg: "rgba(10, 15, 30, 0.5)",
        designColor: "#00f0ff",
        cyberPurple: "#b026ff",
      },
      boxShadow: {
        shadowOne: "0px 10px 30px -10px rgba(0, 240, 255, 0.3)",
        neon: "0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(176, 38, 255, 0.3)",
      }
    },
  },
  plugins: [],
}
