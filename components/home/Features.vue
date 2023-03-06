<template>
  <ul class="max-w-7xl mx-auto px-3 lg:flex lg:-space-x-4 items-start">
    <li
      v-for="item in features"
      class="lg:w-1/3 border border-gray-500 px-6 py-8 lg:p-10 bg-white"
      :class="item.class"
    >
      <component :is="item.icon" class="h-20 w-20 text-black" />
      <h2 class="text-3xl font-medium my-2">
        {{ item.title }}
      </h2>
      <p class="lg:pb-6">{{ item.description }}</p>
    </li>
  </ul>
</template>

<script setup lang="ts">
const { t } = useI18n();

const Dev = resolveComponent("IconDev");
const Rd = resolveComponent("IconRd");
const Incubation = resolveComponent("IconIncubation");

const features = [
  {
    title: t("home.features.dapps.title"),
    description: t("home.features.dapps.description"),
    icon: Dev,
    class: "",
  },
  {
    title: t("home.features.rd.title"),
    description: t("home.features.rd.description"),
    icon: Rd,
    class: "mt-4 lg:mt-8",
  },
  {
    title: t("home.features.incubation.title"),
    description: t("home.features.incubation.description"),
    icon: Incubation,
    class: "mt-4 lg:mt-16",
  },
];
</script>
