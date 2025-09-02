<script setup>
import { onMounted } from "vue";
const { $gsap } = useNuxtApp();

onMounted(() => {
  // Hero fade-in
  $gsap.from("#hero h1, #hero p, #hero a", {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
  });
});

// Scroll to Projects on click
function scrollToProjects() {
  $gsap.to(window, {
    duration: 1,
    scrollTo: "#projects",
    ease: "power2.inOut",
  });
}
</script>

<template>
  <section
    id="hero"
    class="min-h-screen flex items-center justify-center bg-gray-50"
  >
    <div class="text-center max-w-3xl">
      <h1
        class="text-5xl md:text-7xl text-gray-900 dark:text-dark leading-tight tracking-tight"
      >
        Hi, I'm <span class="text-gray-900 dark:text-gray-900">Jayden.</span
        ><br />
      </h1>

      <p class="mt-6 text-lg md:text-2xl text-gray-700">
        Your <span class="satoshi font-light">creative</span> developer &
        designer.
      </p>

      <div class="mt-8 relative inline-block">
        <button
          @click="scrollToProjects"
          class="relative px-8 py-3 rounded-xl bg-gray-900 text-white text-lg font-medium uppercase tracking-wide shadow-lg transform transition-all duration-300 hover:ring-4 hover:ring-black hover:-translate-y-1 hover:shadow-2xl hover:bg-gray-50 hover:text-black"
        >
          Get inspired >
        </button>
      </div>
    </div>
  </section>
</template>
