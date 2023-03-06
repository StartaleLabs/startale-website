<template>
  <hero
    page="About us"
    title="Web3 for Billions"
    description="Startale Labs is creating the missing piece for the web3's mass adoption."
  />
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
