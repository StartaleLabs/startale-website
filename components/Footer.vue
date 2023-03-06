<template>
  <footer class="bg-black py-16 lg:py-20 mt-40">
    <div class="max-w-7xl mx-auto px-3">
      <nav class="lg:flex">
        <div class="flex-1">
          <ul class="md:flex md:space-x-20 mb-16 space-y-12 md:space-y-0">
            <li v-for="item in navigation">
              <p class="uppercase text-gray-400 mb-3">{{ item.category }} :</p>
              <ul class="space-y-2">
                <li v-for="menu in item.menu">
                  <NuxtLink :to="menu.href">{{ menu.label }}</NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
          <div>
            <p class="uppercase text-gray-400">EMAIL COPY TO CLIPBOARD :</p>
            <NuxtLink
              to="mailto:info@startale.org"
              class="text-3xl md:text-6xl lg:text-8xl font-serif border-b border-white leading-tight inline-block hover:no-underline"
            >
              info@startale.org
            </NuxtLink>
          </div>
        </div>
        <ul class="flex justify-center space-x-2 mt-12 lg:mt-0">
          <li v-for="item in social">
            <NuxtLink :to="item.href" class="p-2 block">
              <component :is="item.icon" class="h-6 w-6" />
              <span class="sr-only">{{ item.label }}</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <p class="text-gray-300 text-sm mt-12 text-center lg:text-left">
        © 2023 {{ $t("meta.siteName") }} - All Rights Reserved
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const Twitter = resolveComponent("IconTwitter");
const Discord = resolveComponent("IconDiscord");
const Telegram = resolveComponent("IconTelegram");
const Github = resolveComponent("IconGithub");

const navigation = [
  {
    category: "company",
    menu: [
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Blog",
        href: "/blog",
      },
      {
        label: "Jobs",
        href: "",
      },
      {
        label: "Privacy Policy",
        href: "",
      },
    ],
  },
  {
    category: "products",
    menu: [
      {
        label: "Astar Network",
        href: "https://astar.network/",
      },
      {
        label: "Swanky",
        href: "https://docs.astar.network/docs/build/wasm/swanky/",
      },
    ],
  },
  {
    category: "solutions",
    menu: [
      {
        label: "For Startup Teams",
        href: "",
      },
      {
        label: "For Organizations",
        href: "",
      },
      {
        label: "All Solutions",
        href: "",
      },
    ],
  },
];

const social = [
  {
    label: "Twitter",
    href: "",
    icon: Twitter,
  },
  {
    label: "GitHub",
    href: "",
    icon: Github,
  },
  {
    label: "Telegram",
    href: "",
    icon: Telegram,
  },
  {
    label: "Discord",
    href: "",
    icon: Discord,
  },
];
</script>

<style lang="postcss" scoped>
a {
  @apply text-white hover:text-gray-300;
}
</style>
