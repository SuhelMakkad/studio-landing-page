import { defineConfig } from "astro/config";
import compress from "astro-compress";
import tailwind from "@astrojs/tailwind";

import { PROJECT_BASE } from "./src/utils";

// https://astro.build/config
export default defineConfig({
  site: "https://suhelmakkad.github.io",
  base: PROJECT_BASE,
  integrations: [tailwind(), compress()],
});
