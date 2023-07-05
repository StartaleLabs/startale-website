<template>
  <div class="absolute -top-10 left-1/2 z-0 -translate-x-1/2">
    <img
      ref="logoImg"
      id="logo"
      class="next-particle hidden"
      src="~/assets/images/home/logo.png"
      alt=""
    />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      // console.log("d", this.$refs.logoImg);
      const nextParticle = new NextParticle({
        image: this.$refs.logoImg,
        width: window.innerWidth,
        height: window.innerHeight,
        maxWidth: 300,
        maxHeight: 300,
        particleGap: 2,
        // gravity: 0.08,
        mouseForce: 150,
      });
      nextParticle.start();
    });
  },
};
</script>
