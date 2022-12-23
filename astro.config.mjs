import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import partytown from "@astrojs/partytown";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [mdx(), sitemap(), image(), tailwind(), partytown({
    // Adds dataLayer.push as a forwarding-event.
    config: {
      forward: ["dataLayer.push"],
    },
  }),
],
});