// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [react(), mdx()],
  adapter: vercel({
    isr: {
      bypassToken: import.meta.env.VERCEL_REVALIDATE_TOKEN,
    },
    imageService: true,
  })
});
