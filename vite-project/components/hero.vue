<script setup>
import { onMounted, onBeforeUnmount } from "vue";
const { $gsap } = useNuxtApp();

function scrollToProjects() {
  $gsap.to(window, {
    duration: 1,
    scrollTo: "#projects",
    ease: "power2.inOut",
  });
}

onMounted(() => {
  const handleMouseMove = (evt) => {
    const mouseX = evt.clientX;
    const mouseY = evt.clientY;

    $gsap.set(".cursor", { x: mouseX, y: mouseY });

    $gsap.to(".shape", {
      x: mouseX,
      y: mouseY,
      stagger: -0.1,
    });
  };

  window.addEventListener("mousemove", handleMouseMove);

  onBeforeUnmount(() => {
    window.removeEventListener("mousemove", handleMouseMove);
  });
});
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#222227]"
  >
    <!-- Shapes following the cursor -->
    <div class="shapes absolute inset-0">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>

    <!-- Text + Button -->
    <div
      class="content absolute inset-0 flex flex-col items-center justify-center gap-8 mix-blend-screen bg-white"
    >
      <h1 class="text-6xl md:text-8xl font-extrabold text-black text-center">
        Hi, I’m Jayden.
      </h1>

      <button
        @click="scrollToProjects"
        class="px-8 py-3 rounded-xl bg-gray-900 text-white text-lg font-medium uppercase tracking-wide shadow-lg transform transition-all duration-300 hover:ring-4 hover:ring-black hover:-translate-y-1 hover:shadow-2xl hover:bg-gray-50 hover:text-black"
      >
        Get inspired >
      </button>
    </div>

    <!-- Custom cursor -->
    <div class="cursor fixed top-0 left-0 pointer-events-none z-[1000]"></div>

    <!-- Volunteering indicator -->
    <div class="absolute bottom-40 left-8 flex items-center gap-3">
      <!-- Ping circle -->
      <span class="radar-ping relative flex h-3 w-3">
        <span
          class="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"
        ></span>
        <span
          class="relative inline-flex rounded-full h-3 w-3 bg-green-500"
        ></span>
      </span>

      <!-- Text -->
      <span class="text-black text-sm font-medium">
        Available for volunteering
      </span>
    </div>
  </section>
</template>

<style scoped>
body,
* {
  cursor: none;
}

.shape {
  position: absolute;
  border-radius: 50%;
  will-change: transform;
}
.shape-1 {
  background: #0066ff;
  width: 650px;
  height: 650px;
  margin: -325px 0 0 -325px;
}
.shape-2 {
  background: #e9bbda;
  width: 440px;
  height: 440px;
  margin: -220px 0 0 -220px;
}
.shape-3 {
  background: #fd9915;
  width: 270px;
  height: 270px;
  margin: -135px 0 0 -135px;
}
</style>
