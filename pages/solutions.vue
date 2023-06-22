<template>
  <div
    class="py-28 flex items-center justify-center h-[80vh] relative overflow-hidden"
  >
    <img
      class="w-full h-auto absolute bottom-0 left-0 z-0 min-w-[1000px]"
      src="~/assets/images/home/particle-wave.svg"
      alt=""
    />
    <div class="text-center max-w-5xl pb-6 lg:pb-12 px-3">
      <p class="text-black lg:text-2xl mb-1 font-serif">
        {{ $t("meta.solutions.title") }}
      </p>
      <h1 class="text-4xl lg:text-6xl font-semibold !leading-[1.2] font-serif">
        From Infrastructure to Applications
      </h1>
      <p class="lg:text-xl mt-4">{{ $t("meta.solutions.description") }}</p>
    </div>
  </div>
  <div class="space-y-28 lg:space-y-40 pb-40">
    <SolutionsIntroduction />
    <SolutionsFeatures />
    <SolutionsWeb3 />
    <!-- <SolutionsLogos /> -->
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
import { meta } from "@/content/meta";
const { t } = useI18n();
const seoTitle = `${t("meta.solutions.title")} | ${meta.siteName} - ${t(
  "meta.tagline"
)}`;
const seoDescription = t("meta.solutions.description");
const seoUrl = `${meta.url}${route.fullPath}`;
const seoImage = `${meta.image}common.png`;

useServerSeoMeta({
  title: () => seoTitle,
  description: () => seoDescription,
  ogTitle: () => seoTitle,
  ogDescription: () => seoDescription,
  ogImage: () => seoImage,
  ogImageUrl: () => seoImage,
  ogType: () => "website",
  ogUrl: () => seoUrl,
  twitterCard: () => "summary_large_image",
  twitterTitle: () => seoTitle,
  twitterDescription: () => seoDescription,
  twitterImage: () => seoImage,
});
</script>
