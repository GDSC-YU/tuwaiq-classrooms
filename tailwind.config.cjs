/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        /* yu colors */
        "yu-orange-dark": "#f68939",
        /* google colors */
        "google-blue": "#5C9EFF",
        "google-red": "#F25C4E",
        "google-yellow": "#FFC247",
        "google-green": "#33C075",
      },
    },
  },
  plugins: [],
};
