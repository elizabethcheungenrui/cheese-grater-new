// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://cheesegratermagazine.org",
  output: "server",
  integrations: [react(), mdx(), sitemap()],
  adapter: vercel({
    isr: {
      bypassToken: import.meta.env.VERCEL_REVALIDATE_TOKEN,
    },
  }),
});
