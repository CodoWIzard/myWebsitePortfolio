<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Shapes following the cursor -->
    <div class="shapes absolute inset-0">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>

    <!-- Custom cursor -->
    <div class="cursor fixed top-0 left-0 pointer-events-none z-[1000]"></div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
const { $gsap } = useNuxtApp();
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = ref([
  {
    title: "Project 1",
    description: "Description of Project 1",
    image: "/focus.png",
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    image: "/images/project2.jpg",
  },
  {
    title: "Project 3",
    description: "Description of Project 3",
    image: "/images/project3.jpg",
  },
  // Add more projects here
]);

onMounted(() => {
  $gsap.registerPlugin(ScrollTrigger);

  $gsap.utils.toArray(".project-card").forEach((card) => {
    $gsap.from(card, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  });
});
</script>

<style scoped>
.projects-container {
  position: relative;
}

.project-card {
  margin-bottom: 6rem;
}
</style>
