<template>
  <canvas
    ref="starsCanvas"
    class="absolute -top-10 left-1/2 z-0 -translate-x-1/2"
  />
</template>

<script setup lang="ts">
import * as THREE from "three";

import { ref } from "vue";
const starsCanvas = ref(null);

onMounted(() => {
  // Canvas
  const canvas = starsCanvas.value;

  // Sizes
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // Scene
  const scene = new THREE.Scene();

  // Camera
  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.z = 10;
  camera.position.x = Math.PI / 2;

  if (canvas !== null) {
    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width, sizes.height);

    // Particles
    let points: any;
    const L = 20;
    const num = 6000;
    const positions = new Float32Array(num * 3);
    const geometry = new THREE.BufferGeometry();

    for (let i = 0; i < positions.length; i += 3) {
      let x = L * Math.random() - L / 2;
      let y = L * Math.random() - L / 2;
      let z = L * Math.random() - L / 2;
      positions[i] = x;
      positions[i + 1] = y;
      positions[i + 2] = z;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      size: 0.015,
      color: "#999999",
    });
    points = new THREE.Points(geometry, material);
    scene.add(points);
    scene.background = new THREE.Color(0xffffff);

    animate();

    function animate() {
      requestAnimationFrame(animate);

      for (let i = 0; i < positions.length; i += 3) {
        points.geometry.attributes.position.array[i + 2] += 0.1;
        if (points.geometry.attributes.position.array[i + 2] > 20) {
          points.geometry.attributes.position.array[i + 2] = 0;
        }
      }
      points.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    }
  }
});
</script>
