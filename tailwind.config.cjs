/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "yu-orange": "#feb150",
        "yu-orange-dark": "#f68939",
      },
    },
  },
  plugins: [],
};
