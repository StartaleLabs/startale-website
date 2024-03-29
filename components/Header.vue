<template>
  <header
    class="font-serif absolute top-0 left-0 right-0 z-10 h-20 lg:h-28 flex items-center"
  >
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between px-3 w-full"
      aria-label="Global"
    >
      <NuxtLink :to="localePath('/')">
        <span class="sr-only">{{ $t("meta.siteName") }}</span>
        <img
          class="h-12 lg:h-20"
          src="~/assets/images/logos/startale-horizontal.svg"
          :alt="$t('meta.siteName')"
        />
      </NuxtLink>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2 inline-flex items-center justify-center rounded-md p-3 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-10 leading-tight font-normal">
        <NuxtLink
          :to="localePath('/products')"
          class="border-b-2 py-2"
          :class="`${locale !== 'ja' ? 'text-xl' : 'text-base'} ${
            route.href === '/products' ? 'border-black' : 'border-transparent'
          }`"
          @click="mobileMenuOpen = false"
        >
          {{ $t("meta.products.title") }}
        </NuxtLink>
        <NuxtLink
          :to="localePath('/solutions')"
          class="border-b-2 py-2"
          :class="`${locale !== 'ja' ? 'text-xl' : 'text-base'} ${
            route.href === '/solutions' ? 'border-black' : 'border-transparent'
          }`"
          @click="mobileMenuOpen = false"
        >
          {{ $t("meta.solutions.title") }}
        </NuxtLink>
        <NuxtLink
          :to="localePath('/about')"
          class="border-b-2 py-2"
          :class="`${locale !== 'ja' ? 'text-xl' : 'text-base'} ${
            route.href === '/about' ? 'border-black' : 'border-transparent'
          }`"
          @click="mobileMenuOpen = false"
        >
          {{ $t("meta.about.title") }}
        </NuxtLink>
        <NuxtLink
          :to="localePath('/blog')"
          class="border-b-2 py-2"
          :class="`${locale !== 'ja' ? 'text-xl' : 'text-base'} ${
            route.href === '/blog' ? 'border-black' : 'border-transparent'
          }`"
          @click="mobileMenuOpen = false"
        >
          {{ $t("meta.blog.title") }}
        </NuxtLink>
        <NuxtLink
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          class="nav-item border-l border-gray-500 pl-6 flex items-center"
        >
          <GlobeAltIcon class="w-6 h-6 stroke-1 mr-1" />
          <span :class="locale.code !== 'ja' && 'text-xl'">
            {{ locale.name }}
          </span>
        </NuxtLink>
      </div>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-white px-3 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 flex items-center justify-center"
      >
        <button
          type="button"
          class="p-3 absolute right-1 top-4"
          @click="mobileMenuOpen = false"
        >
          <span class="sr-only">Close menu</span>
          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
        </button>

        <div class="font-serif text-center text-2xl space-y-2">
          <div>
            <NuxtLink
              :to="localePath('/products')"
              class="block py-6"
              @click="mobileMenuOpen = false"
            >
              {{ $t("meta.products.title") }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/solutions')"
              class="block py-6"
              @click="mobileMenuOpen = false"
            >
              {{ $t("meta.solutions.title") }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/about')"
              class="block py-6"
              @click="mobileMenuOpen = false"
            >
              {{ $t("meta.about.title") }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/blog')"
              class="block py-6"
              @click="mobileMenuOpen = false"
            >
              {{ $t("meta.blog.title") }}
            </NuxtLink>
            <NuxtLink
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              class="flex items-center justify-center py-6"
              @click="mobileMenuOpen = false"
            >
              <GlobeAltIcon class="w-6 h-6 stroke-1 mr-1" />
              <span :class="locale.code === 'ja' && 'text-xl'">
                {{ locale.name }}
              </span>
            </NuxtLink>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon, GlobeAltIcon } from "@heroicons/vue/24/outline";

const route = useRoute();
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

type Locale = {
  code: string;
  file: string;
  iso: string;
  name: string;
};

const availableLocales = computed(() => {
  return locales.value.filter((i: Locale) => i.code !== locale.value);
});
const localePath = useLocalePath();

const mobileMenuOpen = ref(false);
</script>

<style lang="postcss" scoped>
a {
  @apply hover:no-underline;
}
</style>
