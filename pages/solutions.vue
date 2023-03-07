<template>
  <div class="py-28 flex items-center justify-center h-[80vh] px-3">
    <div class="text-center max-w-5xl">
      <p class="text-black lg:text-2xl mb-1 font-serif">
        {{ $t("meta.solutions.title") }}
      </p>
      <h1 class="text-4xl lg:text-6xl font-semibold !leading-[1.2] font-serif">
        From Infrastructure to Applications
      </h1>
      <p class="lg:text-xl mt-4">{{ $t("meta.solutions.description") }}</p>
    </div>
  </div>
  <div class="space-y-28 lg:space-y-40">
    <SolutionsIntroduction />
    <SolutionsFeatures />
    <SolutionsWeb3 />
    <!-- <SolutionsLogos /> -->
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "meta.solutions.title",
  slug: "solutions",
  description: "meta.solutions.description",
});
</script>
