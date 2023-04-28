<template>
  <div class="pt-28 flex items-center justify-center relative overflow-hidden">
    <img
      class="w-full h-auto absolute bottom-0 left-0 z-0 min-w-[1000px]"
      src="~/assets/images/home/particle-wave.svg"
      alt=""
    />
    <div class="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 w-full">
      <div class="text-center">
        <img
          src="/images/blog/placeholder.webp"
          alt=""
          class="object-cover w-full h-[520px] shadow-xl"
        />
      </div>
    </div>
  </div>

  <div class="space-y-28 lg:space-y-40 pb-40">
    <article class="max-w-4xl mx-auto px-4 sm:px-6 pt-12">
      <header class="text-center mb-12">
        <time class="text-gray-400">Mar 27, 2023</time>
        <h1 class="text-5xl font-semibold leading-tight text-black">
          Article title here
        </h1>
      </header>
      <div class="entry-content leading-9">Article content here</div>
      <footer class="mt-16">
        <div class="flex mb-12">
          <p class="mr-2 mt-1.5">Tags:</p>
          <div class="flex flex-wrap">
            <NuxtLink
              href="#"
              class="block border border-gray-300 py-1 px-4 hover:bg-white/10 mr-1 mb-2 hover:no-underline rounded-sm"
            >
              Tag
            </NuxtLink>
          </div>
        </div>
        <div class="flex border border-gray-300 p-8 rounded">
          <div class="shrink-0 mr-4">
            <img
              src="/images/blog/placeholder.webp"
              alt=""
              class="object-cover w-16 h-16 rounded-full"
            />
          </div>
          <div class="flex-1">
            <h3 class="font-bold text-xl mb-2 text-black">Author Name</h3>
            <p>
              Author profile: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </footer>
    </article>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
      <h2 class="text-center text-5xl font-semibold mb-12">Related Posts</h2>
      <ul class="grid grid-cols-3 gap-12">
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

<style lang="postcss">
.entry-content {
  @apply prose lg:prose-xl prose-a:text-blue-500 hover:prose-a:text-blue-400 prose-headings:text-white bg-white tracking-wider prose-headings:font-bold prose-blockquote:font-normal prose-blockquote:py-3 prose-blockquote:pl-7 prose-blockquote:pr-5 prose-blockquote:bg-white/5 prose-strong:font-medium;
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
.entry-content strong {
  background: linear-gradient(transparent 60%, #69275c 60%);
}
</style>
