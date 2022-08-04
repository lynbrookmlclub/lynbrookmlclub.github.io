import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

const dev = process.env.NODE_ENV === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: "404.html",
    }),
    paths: {
      // TODO remove this whole statement on full deploy
      // DO NOT TOUCH until the repo is moved to lynbrookml.github.io
      // if there are problems, it is elsewhere, not here
      base: dev ? "" : "/temp.github.io",
    },
    prerender: {
      default: true,
    },
    trailingSlash: "always",
  },
};

export default config;
