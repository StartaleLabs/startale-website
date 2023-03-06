<template>
  <div class="py-28 flex items-center justify-center h-[80vh] px-3">
    <div class="text-center max-w-5xl">
      <p class="text-black lg:text-2xl mb-1 font-serif">{{ props.page }}</p>
      <h1 class="text-4xl lg:text-6xl font-semibold !leading-[1.2] font-serif">
        {{ props.title }}
      </h1>
      <p v-if="props.description !== ''" class="lg:text-xl mt-4">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  page: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
});
</script>
