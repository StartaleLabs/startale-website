<template>
  <div class="border-y border-gray-500 py-12 lg:py-20">
    <div
      class="lg:flex justify-center items-center lg:space-x-12 max-w-7xl mx-auto px-3"
    >
      <p class="text-black font-serif font-normal text-center mb-8 lg:mb-0">
        Featured on
      </p>
      <ul class="md:flex md:space-x-12 space-y-8 md:space-y-0">
        <li v-for="item in logos">
          <NuxtLink :to="item.href" target="_blank">
            <img
              class="h-10 w-60 object-contain mx-auto"
              :src="useAsset('logos/' + item.image)"
              :alt="item.name"
            />
            <span class="sr-only">{{ item.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const logos = [
  {
    image: "nikkei.png",
    name: "日本経済新聞",
    href: "https://www.nikkei.com/",
  },
  {
    image: "coindesk.svg",
    name: "CoinDesk",
    href: "https://www.coindesk.com/",
  },
  { image: "forbes.svg", name: "Forbes", href: "https://www.forbes.com/" },
];
</script>
