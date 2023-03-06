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

const Collaborate = resolveComponent("IconCollaborate");
const Advise = resolveComponent("IconAdvise");
const Dev = resolveComponent("IconDev");

const features = [
  {
    title: t("solutions.features.collaborate.title"),
    description: t("solutions.features.collaborate.description"),
    icon: Collaborate,
    class: "",
  },
  {
    title: t("solutions.features.advise.title"),
    description: t("solutions.features.advise.description"),
    icon: Advise,
    class: "mt-4 lg:mt-8",
  },
  {
    title: t("solutions.features.dev.title"),
    description: t("solutions.features.dev.description"),
    icon: Dev,
    class: "mt-4 lg:mt-16",
  },
];
</script>
