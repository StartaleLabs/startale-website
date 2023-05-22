<template>
  <div
    class="pt-20 sm:pt-24 lg:pt-32 flex items-center justify-center relative overflow-hidden"
  >
    <img
      class="w-full h-auto absolute bottom-0 left-0 z-0 min-w-[1000px]"
      src="~/assets/images/home/particle-wave.svg"
      alt=""
    />
    <div class="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 w-full">
      <div class="text-center">
        <img
          :src="post.image"
          alt=""
          class="object-cover w-full lg:h-[520px]"
        />
      </div>
    </div>
  </div>

  <div class="space-y-28 lg:space-y-40 pb-40">
    <article class="max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-20">
      <header class="text-center mb-10 sm:mb-16">
        <time class="text-gray-400">{{ post.publishedDate }}</time>
        <h1
          class="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-black"
        >
          {{ post.title }}
        </h1>
      </header>
      <div class="entry-content leading-9" v-html="post.body" />
      <footer class="mt-16">
        <div class="flex mb-12 text-base lg:text-lg">
          <p class="mr-2 mt-1.5">{{ $t("blog.tags") }}:</p>
          <div class="flex flex-wrap">
            <NuxtLink
              v-for="tag in post.tagsOriginal.split(',')"
              :href="i18n + '/blog/tag/' + tag"
              class="block border border-gray-300 py-1 px-4 hover:bg-gray-50 hover:text-gray-900 mr-1 mb-2 hover:no-underline rounded-sm"
            >
              {{ tag }}
            </NuxtLink>
          </div>
        </div>
        <div class="flex border border-gray-300 p-4 lg:p-8 rounded">
          <div class="shrink-0 mr-4">
            <img
              :src="post.authorImg"
              alt=""
              class="object-cover w-12 lg:w-16 h-12 lg:h-16 rounded-full"
            />
          </div>
          <div class="flex-1">
            <h3 class="font-bold text-lg lg:text-xl mb-1 text-black">
              {{ post.author.profileSpace.name }}
            </h3>
            <p class="text-base lg:text-lg">
              {{ post.author.profileSpace.about }}
            </p>
          </div>
        </div>
      </footer>
    </article>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
      <h2 class="text-center text-4xl lg:text-5xl font-semibold mb-2 lg:mb-12">
        {{ $t("blog.related") }}
      </h2>
      <ul>
        <BlogArticleCard v-for="post in posts" :post="post" />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import gql from "graphql-tag";
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();

const route = useRoute();
const slug = route.params.slug;

// The subsocial space for news: https://polkaverse.com/11215 , and Japanese: https://polkaverse.com/11408
const { locale, t } = useI18n();
const astarSpace = locale.value === "ja" ? 11408 : 11215;
const i18n = locale.value === "ja" ? "/ja" : "";

const query = gql`
  query PostsBySlug {
    posts(where: { space: { id_eq: "${astarSpace}" }, slug_eq: "${slug}", hidden_eq: false }, orderBy: id_DESC) {
      publishedDate: createdOnDay
      title
      href: canonical
      image
      body
      summary
      tagsOriginal
      author: ownedByAccount { profileSpace { name, image, about } }
    }
  }
`;

const { data } = await useAsyncQuery({ query, clientId: "subsocial" });
const post = data.value.posts.map(
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
      authorImg: item.author.profileSpace.image
        ? "https://ipfs.subsocial.network/ipfs/" +
          item.author.profileSpace.image
        : "/images/blog/placeholder.webp",
      publishedDate: formattedDate,
      body: item.body ? md.render(item.body) : "",
    };
  }
)[0];

const orConditions = post.tagsOriginal
  .split(",")
  .map((tag: string) => `{ tagsOriginal_containsInsensitive: "${tag}" }`)
  .join(", ");

const querySpace = gql`
  query PostsByTag {
    posts(where: { space: { id_eq: "${astarSpace}" }, AND: { OR: [${orConditions}] }, slug_not_eq: "${slug}", hidden_eq: false }, orderBy: id_DESC) {
      publishedDate: createdOnDay
      title
      href: canonical
      image
      slug
    }
  }
`;

const dataRelated = await useAsyncQuery({
  query: querySpace,
  clientId: "subsocial",
});
const posts = dataRelated.data.value.posts.map(
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
const seoTitle = `${post.title} | ${meta.siteName}`;
const seoDescription = post.summary;
const seoUrl = `${meta.url}${route.fullPath}`;

useServerSeoMeta({
  title: () => seoTitle,
  description: () => seoDescription,
  author: () => post.author.profileSpace.name,
  ogSiteName: () => meta.siteName,
  ogLocale: () => locale.value,
  ogTitle: () => seoTitle,
  ogDescription: () => seoDescription,
  ogImage: () => post.image,
  ogImageUrl: () => post.image,
  ogType: () => "article",
  ogUrl: () => seoUrl,
  twitterSite: () => `@${meta.twitter}`,
  twitterCard: () => "summary_large_image",
  twitterTitle: () => seoTitle,
  twitterDescription: () => seoDescription,
  twitterImage: () => post.image,
});

useSchemaOrg([
  defineArticle({
    author: {
      name: post.author.profileSpace.name,
    },
  }),
]);
</script>

<style lang="postcss">
.entry-content {
  @apply prose lg:prose-xl prose-a:text-blue-500 hover:prose-a:text-blue-400 prose-headings:text-white prose-headings:font-bold prose-blockquote:font-normal prose-blockquote:py-3 prose-blockquote:pl-7 prose-blockquote:pr-5 prose-blockquote:bg-white/5 prose-strong:font-medium mx-auto;
}
.entry-content h2 a,
.entry-content h3 a,
.entry-content h4 a {
  @apply text-black no-underline;
}
.entry-content p code {
  font-size: 0.9em;
  @apply bg-white/20 font-normal rounded p-2;
}
.entry-content p code::before,
.entry-content p code::after {
  @apply hidden;
}
/* .entry-content strong {
  background: linear-gradient(transparent 60%, #69275c 60%);
} */
</style>
