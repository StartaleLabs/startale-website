<template>
  <HomeHero />
  <client-only>
    <HomeParticleStars />
    <HomeParticleLogo />
  </client-only>
  <div class="space-y-28 lg:space-y-40">
    <HomeFeatures />
    <HomeProducts />
    <HomeLogos />
    <!-- <HomeBlog /> -->
    <HomeCallToAction />
  </div>
</template>

<script setup lang="ts">
import { meta } from "@/content/meta";
const { t } = useI18n();
const seoTitle = `${meta.siteName} - ${t("meta.tagline")}`;
const seoDescription = t("meta.description");
const seoUrl = meta.url;
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
