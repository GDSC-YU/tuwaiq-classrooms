import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), prefetch()],
});
