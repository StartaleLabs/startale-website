// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // baseURL: "/startale-website/", // for GitHub Pages
    head: {
      script: [{ src: "./nextparticle.js" }],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxtjs/apollo",
    "nuxt-simple-sitemap",
    "nuxt-schema-org",
  ],
  apollo: {
    clients: {
      subsocial: {
        httpEndpoint: "https://squid.subsquid.io/subsocial/graphql",
      },
    },
  },
  i18n: {
    baseUrl: "https://startale.org",
    locales: [
      {
        code: "en",
        name: "English",
        iso: "en-US",
        file: "en.json",
      },
      {
        code: "ja",
        name: "日本語",
        iso: "ja-JP",
        file: "ja.json",
      },
    ],
    langDir: "lang",
    defaultLocale: "en",
    strategy: "prefix_except_default",
    vueI18n: {
      legacy: false,
      locale: "en",
      fallbackLocale: "en",
    },
  },
  sitemap: {
    siteUrl: "https://startale.org",
    discoverImages: false,
  },
  schemaOrg: {
    host: "https://startale.org/",
  },
});
