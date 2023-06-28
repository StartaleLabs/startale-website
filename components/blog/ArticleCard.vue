<template>
  <div class="border-b border-gray-300 py-8">
    <!-- post.slug is the slug of the article -->
    <a
      :href="
        locale === 'ja'
          ? '/blog/38814'
          : '/blog/startale-and-sony-network-communications-form-capital-38815'
      "
      class="block sm:flex space-y-4 sm:space-y-0 sm:space-x-8 items-center overflow-hidden bg-space-gray group transition hover:no-underline"
    >
      <img
        :src="post.image"
        :alt="post.title"
        class="object-cover w-full sm:w-[300px] h-[200px] group-hover:brightness-110 shrink-0"
      />
      <div class="flex-1">
        <time class="text-gray-400 text-tiny">{{ post.publishedDate }}</time>
        <p
          class="text-xl line-clamp-3 leading-7 mt-1 group-hover:text-black group-hover:underline"
        >
          {{ post.title }}
        </p>
      </div>
    </a>
  </div>
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
