<template>
  <div class="bg-gray-50 py-32 lg:py-48 2xl:py-64 relative overflow-hidden">
    <img
      class="w-full h-auto absolute bottom-0 left-0 z-0 min-w-[1000px]"
      src="~/assets/images/home/particle-wave.svg"
      alt=""
    />
    <div class="text-center max-w-2xl mx-auto px-3 relative z-10 pb-12">
      <p class="font-serif text-4xl lg:text-5xl text-black font-medium mb-12">
        How can Startale Labs help your project?
      </p>
      <Button :href="localePath('/solutions')">{{
        $t("home.cta.button")
      }}</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>
