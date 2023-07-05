<template>
  <div
    class="py-28 flex items-center justify-center h-[60vh] relative overflow-hidden"
  >
    <img
      class="w-full h-auto absolute bottom-0 left-0 z-0 min-w-[1000px]"
      src="~/assets/images/home/particle-wave.svg"
      alt=""
    />
    <div class="text-center max-w-5xl pb-6 lg:pb-12 px-3">
      <p class="text-lg lg:text-2xl mb-1">{{ $t("blog.tag") }}:</p>
      <h1
        class="text-4xl sm:text-5xl lg:text-7xl font-semibold !leading-[1.2] font-serif"
      >
        {{ tag }}
      </h1>
    </div>
  </div>

  <div class="space-y-28 lg:space-y-40 pb-40">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
      <ul v-if="posts.length > 0">
        <BlogArticleCard v-for="post in posts" :post="post" />
      </ul>
      <div v-else class="text-center">
        <p class="mb-6">{{ $t("blog.no_articles") }}</p>
        <NuxtLink :to="localePath('/blog')">
          {{ $t("blog.back") }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gql from "graphql-tag";
const localePath = useLocalePath();

const route = useRoute();
const tag = route.params.tag;

// The subsocial space for news: https://polkaverse.com/11215 , and Japanese: https://polkaverse.com/11408
const { locale, t } = useI18n();
const astarSpace = locale.value === "ja" ? 11408 : 11215;

const query = gql`
query PostsByTag {
    posts(where: { space: { id_eq: "${astarSpace}" }, tagsOriginal_containsInsensitive: "${tag}", hidden_eq: false }, orderBy: id_DESC) {
      publishedDate: createdOnDay
      title
      href: canonical
      image
      slug
    }
  }
`;

const { data } = await useAsyncQuery({ query, clientId: "subsocial" });
const posts = data.value.posts.map(
  (item: { publishedDate: string | number | Date }) => {
    const date = new Date(item.publishedDate);
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    return {
      ...item,
      image: item.image
        ? "https://ipfs.subsocial.network/ipfs/" + item.image
        : "/images/blog/placeholder.webp",
      publishedDate: formattedDate,
    };
  }
);

import { meta } from "@/content/meta";
const seoTitle = `${tag} | ${meta.siteName} - ${t("meta.tagline")}`;
const seoDescription = t("blog.description");
const seoUrl = `${meta.url}${route.fullPath}`;
const seoImage = `${meta.image}blog.png`;

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
