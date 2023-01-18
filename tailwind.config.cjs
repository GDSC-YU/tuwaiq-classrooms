/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "pale-blue": "#90CAF9",
        "pale-red": "#EF9A9A",
        "pale-yellow": "#FFE082",
        "pale-green": "#A5D6A7",
        "twitter-color": "#00acee",
        "dark-pink": "#C13584",
        "light-grey": "#D9D9D9",
        "off-white": "#FFF4E6",
        orangee: "#FFA500",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif", ...defaultTheme.fontFamily.sans],
        cairo: ["Cairo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
