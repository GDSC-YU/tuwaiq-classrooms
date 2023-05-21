/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        /* yu colors */
        "yu-orange": "#feb150",
        "yu-orange-dark": "#f68939",
        /* google colors */
        // dark
        "google-blue": "#5C9EFF",
        "google-red": "#F25C4E",
        "google-yellow": "#FFC247",
        "google-green": "#33C075",
        // pale
        "pale-blue": "#7AB8F5",
        "pale-red": "#E88383",
        "pale-yellow": "#FFD476",
        "pale-green": "#93CFA0",
        /* social colors */
        "twitter-blue": "#00acee",
        "github-purple": "#6e5494",
        "instagram-pink": "#C13584",
        /* other colors */
        "dark-grey": "#DADADA",
      },
    },
  },
  plugins: [],
};
