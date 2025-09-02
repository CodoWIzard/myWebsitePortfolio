<template>
  <div
    id="intro"
    class="fixed inset-0 bg-black flex items-center justify-center z-50"
  >
    <h1 class="text-white text-5xl font-Satoshi">Roo Portfolio</h1>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
const { $gsap } = useNuxtApp();

onMounted(() => {
  const tl = $gsap.timeline({
    onComplete: () => {
      const intro = document.getElementById("intro");
      if (intro) intro.remove();
    },
  });

  tl.to("#intro h1", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    delay: 1,
  })
    .to("#intro", {
      y: "-100%",
      duration: 1,
      ease: "power2.inOut",
    })
    .to(
      "#header",
      {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      },
      "-=0.3"
    );
});
</script>
