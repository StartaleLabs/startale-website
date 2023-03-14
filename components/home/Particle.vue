<template>
  <div class="flex items-center h-screen justify-center px-3">
    <img id="logo" ref="logoImg" class="next-particle" src="logo.png">
  </div>
</template>
<script>

export default {
  mounted(){
    this.$nextTick(() => {
      console.log('d', this.$refs.logoImg)
      const nextParticle = new NextParticle({
        image: this.$refs.logoImg,
        width: window.innerWidth,
        height: window.innerHeight,
        maxWidth: 300,
        maxHeight: 300,
        particleGap: 2,
        // gravity: 0.08,
        mouseForce: 150
      });
      nextParticle.start();

      window.onresize = function () {
        nextParticle.width = window.innerWidth;
        nextParticle.height = window.innerHeight;
        nextParticle.start();
      };
    });
  },
}
</script>