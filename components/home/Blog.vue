<template>
  <div class="w-[300px] md:w-full lg:max-w-7xl mx-auto md:px-3">
    <h2 class="font-serif text-black text-4xl lg:text-7xl font-medium">
      From the Blog
    </h2>
    <ul class="mb-12">
      <li
        v-for="i in 3"
        class="md:flex border-b border-gray-300 py-8 md:space-x-8"
      >
        <NuxtLink
          class="w-[300px] h-[156px] object-cover bg-gray-200 flex justify-center items-center shrink-0 mb-4 lg:mb-0"
        >
          img
        </NuxtLink>
        <div class="flex-1">
          <h3 class="mb-2 lg:mb-4">
            <NuxtLink class="text-xl lg:text-2xl font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.</NuxtLink
            >
          </h3>
          <p class="text-base lg:text-lg">
            <time>January 11, 2023</time> — <span>Category</span>
          </p>
        </div>
        <div class="items-center hidden lg:flex">
          <NuxtLink class="flex items-center text-gray-500">
            <span class="uppercase">Read</span>
            <ChevronRightIcon class="w-6 h-6 stroke-1" />
          </NuxtLink>
        </div>
      </li>
    </ul>
    <div class="text-center">
      <Button>{{ $t("home.blog.button") }}</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from "@heroicons/vue/24/outline";

const posts = [
  {
    image: "nikkei.png",
    title: "日本経済新聞",
    date: "https://www.nikkei.com/",
  },
];
</script>
