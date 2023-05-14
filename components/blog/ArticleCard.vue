<template>
  <li class="border-b border-gray-300 py-8">
    <!-- post.slug is the slug of the article -->
    <NuxtLink
      :href="i18n + '/blog/' + post.slug"
      class="flex items-center overflow-hidden bg-space-gray group transition hover:no-underline"
    >
      <img
        :src="post.image"
        :alt="post.title"
        class="object-cover w-[300px] h-[180px] group-hover:brightness-110 shrink-0"
      />
      <div class="ml-10 flex-1">
        <time class="text-gray-400 text-tiny">{{ post.publishedDate }}</time>
        <p
          class="text-xl line-clamp-3 leading-7 mt-1 group-hover:text-black group-hover:underline"
        >
          {{ post.title }}
        </p>
      </div>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const i18n = locale.value === "ja" ? "/ja" : "";

const props = defineProps({
  post: {
    type: Object,
    default: null,
  },
});
</script>
