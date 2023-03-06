<template>
  <div class="layout-right bg-black">
    <div
      class="max-w-2xl lg:max-w-5xl mx-auto px-3 md:flex items-center py-20 lg:py-40 md:space-x-12 lg:space-x-24"
    >
      <div class="shrink-0 mb-12 lg:mb-0">
        <img
          class="w-[200px] lg:w-[280px] mx-auto"
          src="~/assets/images/logos/startale-vertical.svg"
          :alt="$t('meta.siteName')"
        />
      </div>
      <p class="text-gray-300 text-xl lg:text-2xl !leading-loose">
        {{ $t("about.startale") }}
      </p>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.layout-right {
  margin-left: auto;
  max-width: calc(50% + 610px);
  padding: 0 calc(50% - 610px) 0 0;
}
</style>
