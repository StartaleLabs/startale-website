<template>
  <div class="py-28 flex items-center justify-center h-[80vh] px-3">
    <div class="text-center max-w-5xl">
      <p class="text-black lg:text-2xl mb-1 font-serif">
        {{ $t("meta.about.title") }}
      </p>
      <h1 class="text-4xl lg:text-7xl font-semibold !leading-[1.2] font-serif">
        Web3 for Billions
      </h1>
      <p class="lg:text-xl mt-4">
        {{ $t("meta.about.description") }}
      </p>
    </div>
  </div>
  <div class="space-y-28 lg:space-y-40">
    <AboutStartale />
    <AboutRepresentative />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "meta.about.title",
  slug: "about",
  description: "meta.about.description",
});
</script>
