// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    rootId: "app",
    rootTag: "body",
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [{ "http-equiv": "X-UA-Compatible", content: "IE=edge" }],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.bunny.net",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.bunny.net/css?family=roboto-mono:400,400i,500,600,700|inter:300,400,500,600,700,800",
        },
      ],
    },
    pageTransition: { name: "slide", mode: "out-in" },
  },
  components: [
    { path: "~/components/cards", pathPrefix: false },
    { path: "~/components/skeletons", pathPrefix: false },
    { path: "~/components", pathPrefix: false },
  ],
  content: {
    documentDriven: false,
    highlight: {
      theme: "github-dark",
    },
    ignores: [
      "root.md",
      "drafts",
      "template.md",
      "/drafts/",
      "/.vscode/",
      "\\.code-workspace$",
      "\\.gitignore$",
      "\\.port$",
      "\\.json$",
      "\\.ws$",
      "\\.yml$",
    ],
    markdown: {
      toc: { depth: 1, searchDepth: 2 },
    },
    sources: {
      content: {
        driver: "fs",
        base: "content/notes",
      },
    },
  },
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/partytown",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-icon",
  ],
  routeRules: {
    "/projects": { swr: 3600 },
    "/bookmarks": { swr: 3600 },
  },
  runtimeConfig: {
    raindropTestToken: process.env.RAINDROP_TEST_TOKEN,
    raindropCollectionId: process.env.RAINDROP_COLLECTION_ID,
  },
  telemetry: false,
});
