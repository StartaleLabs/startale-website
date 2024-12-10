<template>
  <footer class="bg-black py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-3">
      <nav class="lg:flex">
        <div class="flex-1">
          <ul class="md:flex md:space-x-20 mb-16 space-y-12 md:space-y-0">
            <li v-for="item in navigation">
              <p class="uppercase text-gray-400 mb-3">{{ item.category }} :</p>
              <ul class="space-y-2">
                <li v-for="menu in item.menu">
                  <NuxtLink
                    :to="
                      menu.href.includes('https') ||
                      menu.href.includes('mailto')
                        ? menu.href
                        : localePath(menu.href)
                    "
                    :target="menu.href.includes('https') ? '_blank' : '_self'"
                    class="inline-flex items-center"
                  >
                    {{ menu.label }}
                    <ArrowTopRightOnSquareIcon
                      class="w-4 h-4 ml-1"
                      v-if="menu.href.includes('https')"
                    />
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <ul class="flex justify-center space-x-4 mt-12 lg:mt-0">
          <li v-for="item in social">
            <NuxtLink :to="item.href" target="_blank" class="p-2 block">
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
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";

const Twitter = resolveComponent("IconTwitter");
const Discord = resolveComponent("IconDiscord");
const Telegram = resolveComponent("IconTelegram");
const Github = resolveComponent("IconGithub");

const localePath = useLocalePath();

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
        href: "https://startale.com/en/career",
      },
      {
        label: "Privacy Policy",
        href: "https://docs.google.com/document/d/1XSEQ7pPtAt9qnIVLThwWytdoOqV0aNQh/edit?usp=sharing&ouid=106208569002643720949&rtpof=true&sd=true",
      },
      // {
      //   label: "Contact us",
      //   href: "https://zohb4s71q4n.typeform.com/to/mxHjoQB6",
      // },
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
        href: "https://docs.astar.network/docs/build/wasm/swanky-suite/",
      },
    ],
  },
  {
    category: "solutions",
    menu: [
      {
        label: "For Startup Teams",
        href: "/solutions",
      },
      {
        label: "For Organizations",
        href: "/solutions",
      },
      {
        label: "All Solutions",
        href: "/solutions",
      },
    ],
  },
];

const social = [
  {
    label: "Twitter",
    href: "https://x.com/StartaleGroup",
    icon: Twitter,
  },
  // {
  //   label: "GitHub",
  //   href: "",
  //   icon: Github,
  // },
  // {
  //   label: "Telegram",
  //   href: "",
  //   icon: Telegram,
  // },
  // {
  //   label: "Discord",
  //   href: "",
  //   icon: Discord,
  // },
];
</script>

<style lang="postcss" scoped>
a {
  @apply text-white hover:text-gray-300;
}
</style>
