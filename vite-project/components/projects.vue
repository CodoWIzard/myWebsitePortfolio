<template>
  <section id="projects" class="relative bg-gray-900">
    <h2 class="text-4xl font-bold text-gray-900 mb-12 text-center pt-12"></h2>

    <div class="projects-container">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="project-card relative min-h-screen flex overflow-hidden rounded-2xl shadow-lg"
      >
        <!-- Left side: Description -->
        <div
          class="w-1/2 pr-8 flex flex-col justify-center bg-blue-200 text-gray-900 px-12"
        >
          <h3 class="text-3xl font-bold mb-4">{{ project.title }}</h3>
          <p class="text-gray-800">{{ project.description }}</p>
        </div>

        <!-- Right side: Image -->
        <div class="w-1/2 flex justify-center items-center bg-yellow-200 px-12">
          <img
            :src="project.image"
            alt=""
            class="max-h-[70vh] object-contain rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
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
