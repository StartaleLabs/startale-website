// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
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
});
