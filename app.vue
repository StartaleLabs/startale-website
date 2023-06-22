<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();
const { locale } = useI18n();
import { meta } from "@/content/meta";
const seoUrl = `${meta.url}${route.fullPath}`;
useHead(() => ({
  htmlAttrs: { lang: locale.value },
  link: [
    {
      rel: "canonical",
      href: seoUrl,
    },
  ],
}));

useSchemaOrg([
  defineOrganization({
    name: "Astar Foundation",
    logo: "/logo.png",
  }),
  defineWebSite(),
  defineWebPage(),
]);
</script>
