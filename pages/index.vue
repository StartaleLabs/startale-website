<template>
  <HomeHero />
  <client-only>
    <HomeParticleStars />
    <HomeParticleLogo />
  </client-only>
  <div class="space-y-28 lg:space-y-40">
    <HomeFeatures />
    <HomeProducts />
    <HomeLogos />
    <!-- <HomeBlog /> -->
    <HomeCallToAction />
  </div>
</template>

<script setup lang="ts"></script>
