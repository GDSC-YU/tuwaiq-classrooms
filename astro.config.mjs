import { defineConfig } from "astro/config";
import AstroPWA from "@vite-pwa/astro";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://tc.gdscyu.com",
  integrations: [
    react(),
    tailwind(),
    prefetch(),
    sitemap(),
    AstroPWA({
      injectRegister: null,
      workbox: {
        navigateFallback: "/404",
        globPatterns: ["**/*.{css,js,html,svg,png,ico,txt}"],
      },
      manifest: {
        lang: "en",
        dir: "ltr",
        name: "Tuwaiq Rooms",
        short_name: "Tuwaiq Rooms",
        description:
          "Looking for an empty classroom to study in? We’ve got you covered! Easily explore and access room schedules to plan your study sessions effectively. Discover the perfect study space at Al-Yamamah University’s Tuwaiq building & enhance your study experience!",
        categories: ["university", "education", "classrooms"],
        screenshots: [
          {
            src: "/screenshots/Home-Page.PNG",
            sizes: "1179x2556",
            type: "image/png",
            platform: "narrow",
            label: "Homescreen",
          },
          {
            src: "/screenshots/F-Corner.PNG",
            sizes: "1179x2556",
            type: "image/png",
            platform: "narrow",
            label: "F Corner",
          },
          {
            src: "/screenshots/F205-Schedule.PNG",
            sizes: "1179x2556",
            type: "image/png",
            platform: "narrow",
            label: "F205 Room Schedule",
          },
        ],
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        scope: "/",
        start_url: "/",
        display: "standalone",
        orientation: "portrait-primary",
        theme_color: "#0a0a0a",
        background_color: "#0a0a0a",
        includeAssets: ["**"],
      },
    }),
  ],
});
