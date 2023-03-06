<template>
  <NuxtLink
    :to="href"
    class="bg-black font-serif text-white py-4 pl-8 pr-6 hover:bg-gray-800 inline-flex items-center text-xl hover:no-underline hover:text-white"
  >
    <slot />
    <ArrowRightIcon class="w-6 h-6 stroke-1 ml-1" />
  </NuxtLink>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  href: {
    type: String,
    default: "",
  },
});
</script>
