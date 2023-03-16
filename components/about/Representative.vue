<template>
  <div class="max-w-6xl mx-auto px-3">
    <h2 class="text-center text-5xl lg:text-6xl font-medium mb-10 lg:mb-16">
      Representative
    </h2>
    <ul class="flex flex-col space-y-6 lg:space-y-12">
      <li
        v-for="item in representative"
        class="md:flex items-center border border-gray-500 py-8 px-6 lg:p-12 md:space-x-8 lg:space-x-12"
      >
        <div v-if="item.image !== ''" class="mb-6 lg:mb-0 shrink-0">
          <img
            class="w-[280px] lg:w-[320px] mx-auto"
            :src="useAsset('about/' + item.image)"
            :alt="item.name"
          />
        </div>
        <div>
          <h3 class="font-serif text-black text-4xl font-medium">
            {{ item.name }}
          </h3>
          <p class="font-serif text-black mt-1 mb-6">{{ item.title }}</p>
          <p class="text-xl leading-relaxed">{{ item.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const representative = [
  {
    image: "sota.webp",
    name: t("about.representative.sota.name"),
    title: "CEO",
    description: t("about.representative.sota.description"),
  },
];
</script>
