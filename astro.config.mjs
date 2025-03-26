// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://dazzling-kringle-ce6b70.netlify.app/",
  integrations: [preact()]
});