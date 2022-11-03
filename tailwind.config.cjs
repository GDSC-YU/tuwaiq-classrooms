/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "pale-blue": "#BBDEFB",
        "pale-red": "#FFCDD2",
        "pale-yellow": "#FFECB3",
        "pale-green": "#C8E6C9",
        orange: "#FFA500",
        "google-red": "#EA4335",
        "google-blue": "#4285F4",
        "google-yellow": "#FBBC04",
        "google-green": "#34A853",
        "pale-beige": "#FFF4E6",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto", "sans-serif"],
        cairo: ["Cairo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
