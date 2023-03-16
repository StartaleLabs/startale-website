// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // baseURL: "/startale-website/", // for GitHub Pages
    head: {
      script: [{ src: "./nextparticle.js" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "~/modules/sitemap", "@nuxtjs/i18n"],
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
    hostname: "https://startale.org",
  },
});
