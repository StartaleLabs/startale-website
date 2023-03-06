<template>
  <div>
    <h2
      class="text-5xl lg:text-7xl px-3 leading-none text-black max-w-2xl mx-auto font-medium -mb-2"
    >
      Purpose-Built
    </h2>
    <div class="layout-left bg-black">
      <div class="max-w-2xl mx-auto px-3 pb-24 lg:pb-40">
        <h2 class="text-5xl lg:text-7xl leading-none font-medium text-white">
          for Web3;
        </h2>
        <p
          class="text-gray-300 text-xl leading-relaxed whitespace-pre-line mt-12"
        >
          {{ $t("solutions.web3") }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.layout-left {
  margin-right: auto;
  max-width: calc(50% + 610px);
  padding: 0 0 0 calc(50% - 610px);
}
</style>
