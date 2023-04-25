<template>
  <div
    class="py-28 flex items-center justify-center h-[80vh] relative overflow-hidden"
  >
    <img
      class="w-full h-auto absolute bottom-0 left-0 z-0 min-w-[1000px]"
      src="~/assets/images/home/particle-wave.svg"
      alt=""
    />
    <div class="text-center max-w-5xl pb-6 lg:pb-12 px-3">
      <p class="text-black lg:text-2xl mb-1 font-serif">
        {{ $t("meta.products.title") }}
      </p>
      <h1 class="text-4xl lg:text-6xl font-semibold !leading-[1.2] font-serif">
        Technologies for an open, decentralised, & trust free society
      </h1>
      <!-- <p class="lg:text-xl mt-4"></p> -->
    </div>
  </div>

  <div class="max-w-6xl mx-auto px-3 space-y-12 lg:space-y-40 pb-40">
    <div v-for="item in products" class="lg:flex lg:space-x-12">
      <div class="shrink-0 mb-6 lg:mb-6">
        <img
          class="mx-auto w-[160px] lg:w-[200px]"
          :src="useAsset('logos/' + item.logo)"
          :alt="item.name"
        />
      </div>
      <div class="flex-1">
        <h2
          class="font-serif font-medium text-4xl lg:text-5xl mb-6 text-center lg:text-left"
        >
          {{ item.name }}
        </h2>
        <p class="text-xl leading-loose mb-8 whitespace-pre-wrap">
          {{ item.description }}
        </p>
        <nav class="flex flex-wrap mb-12">
          <NuxtLink
            v-for="link in item.links"
            :to="link.href"
            target="_blank"
            class="inline-flex items-center mr-8 mb-6"
          >
            <component :is="link.icon" class="h-6 w-6 mr-1" />
            {{ link.name }}
          </NuxtLink>
        </nav>
        <div
          class="border-y border-gray-300 py-6 lg:py-10 md:flex md:space-x-5 lg:space-x-8"
        >
          <NuxtLink class="shrink-0 block mb-4 lg:mb-0">
            <img
              class="w-[200px] mx-auto"
              :src="useAsset('products/' + item.blog.image)"
              :alt="item.blog.title"
              :to="item.blog.href"
              target="_blank"
            />
          </NuxtLink>
          <div>
            <h3>
              <NuxtLink
                :to="item.blog.href"
                target="_blank"
                class="text-xl font-medium"
              >
                {{ item.blog.title }}
              </NuxtLink>
            </h3>
            <p class="my-2 line-clamp-2">{{ item.blog.description }}</p>
            <NuxtLink
              :to="item.blog.href"
              target="_blank"
              class="hidden lg:flex items-center text-gray-500 text-base"
            >
              <span class="uppercase">Read</span>
              <ChevronRightIcon class="w-5 h-5 stroke-1" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  DocumentTextIcon,
  ComputerDesktopIcon,
  ChevronRightIcon,
} from "@heroicons/vue/24/outline";

definePageMeta({
  title: "meta.products.title",
  slug: "products",
  description: "meta.products.description",
});

const Discord = resolveComponent("IconDiscord");
const Github = resolveComponent("IconGithub");

const { t } = useI18n();

const products = [
  {
    logo: "astar-vertical.svg",
    name: "Astar Network",
    description: t("products.astar"),
    links: [
      {
        icon: ComputerDesktopIcon,
        name: "Website",
        href: "https://astar.network/",
      },
      {
        icon: DocumentTextIcon,
        name: "Docs",
        href: "https://docs.astar.network/",
      },
      {
        icon: Github,
        name: "GitHub",
        href: "https://github.com/AstarNetwork",
      },
      {
        icon: Discord,
        name: "Discord",
        href: "https://discord.gg/Z3nC9U4",
      },
    ],
    blog: {
      image: "astar.webp",
      title:
        "Cross-Virtual Machine: Creating a Portal to the Future of Smart Contracts",
      description:
        "A lot has happened in 2022. The entire Web3 industry broke new ground regarding technical achievements, solving real-life issues, and becoming the breeding ground for industries we've never seen before.",
      href: "https://medium.com/astar-network/cross-virtual-machine-creating-a-portal-to-the-future-of-smart-contracts-a96c6d2f79b8",
    },
  },
  {
    logo: "swanky-vertical.svg",
    name: "Swanky Suite",
    description: t("products.swanky"),
    links: [
      {
        icon: DocumentTextIcon,
        name: "Docs",
        href: "https://docs.astar.network/docs/build/wasm/swanky-suite/",
      },
      {
        icon: Github,
        name: "GitHub",
        href: "https://github.com/AstarNetwork/swanky-cli",
      },
    ],
    blog: {
      image: "swanky.webp",
      title: "Swanky: The All-in-One WASM Tool",
      description:
        "Developers need tools that help write, compile, deploy, and test smart contracts. Currently, the Astar allows developers to use traditional EVM tooling, such as: Hardhat or Truffle.",
      href: "https://medium.com/astar-network/swanky-the-all-in-one-wasm-tool-50c0ed9f07a6",
    },
  },
];
</script>
