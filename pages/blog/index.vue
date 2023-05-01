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
      <h1 class="text-4xl lg:text-8xl font-semibold !leading-[1.2] font-serif">
        Blog
      </h1>
    </div>
  </div>

  <div class="space-y-28 lg:space-y-40 pb-40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
      <h2 class="text-center text-5xl font-semibold mb-12">Latest Posts</h2>
      <ul>
        <BlogArticleCard />
        <BlogArticleCard />
        <BlogArticleCard />
        <BlogArticleCard />
        <BlogArticleCard />
        <BlogArticleCard />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "meta.blog.title",
  slug: "blog",
  description: "meta.blog.description",
});
</script>
