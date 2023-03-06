<template>
  <div class="px-3">
    <h2
      class="font-medium text-3xl lg:text-5xl max-w-3xl mx-auto text-center mb-12"
    >
      {{ $t("home.products.title") }}
    </h2>
    <ul
      class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-40 text-center max-w-4xl mx-auto mb-12"
    >
      <li v-for="item in products">
        <img
          class="w-44 lg:w-44 mx-auto"
          :src="useAsset('logos/' + item.logo)"
          :alt="item.name"
        />
        <p class="text-xl">{{ item.description }}</p>
      </li>
    </ul>
    <div class="text-center">
      <Button :href="localePath('/products')">
        {{ $t("home.products.button") }}
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const products = [
  {
    name: "Astar Network",
    description: t("home.products.astar"),
    logo: "astar-vertical.svg",
  },
  {
    name: "Swanky Suite",
    description: t("home.products.swanky"),
    logo: "swanky-vertical.svg",
  },
];
</script>
