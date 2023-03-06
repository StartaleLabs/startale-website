<template>
  <hero
    page="Solutions"
    title="From Infrastructure to Applications"
    description="Startale Labs develops web3 core infrastructure and decentralised applications."
  />
  <div class="space-y-28 lg:space-y-40">
    <SolutionsIntroduction />
    <SolutionsFeatures />
    <SolutionsWeb3 />
    <SolutionsLogos />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "meta.solutions.title",
  slug: "solutions",
  description: "meta.solutions.description",
});
</script>
