// @ts-check
import { defineConfig, envField, fontProviders } from "astro/config";
import vercel from "@astrojs/vercel";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel({
    isr: {
      // caches all pages on first request and saves for 1 day
      expiration: 60 * 60 * 24,
    },
  }),
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
  },
  env: {
    schema: {
      GITHUB_TOKEN: envField.string({
        context: "server",
        access: "secret",
      }),
    },
  },
  fonts: [
    {
      name: "Space Grotesk",
      cssVariable: "--font-space-grotesk",
      provider: fontProviders.fontsource(),
      weights: [400, 700],
    },
  ],
});
