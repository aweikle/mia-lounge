// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";

export default defineConfig({
  site: "https://miasnaplounge.com",
  output: "static",
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()],
  },
});
