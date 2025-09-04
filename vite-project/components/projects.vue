<template>
  <section id="projects" class="relative bg-gray-900 overflow-hidden">
    <h2 class="text-4xl font-bold text-white mb-12 text-center pt-12">
      My Projects
    </h2>

    <div id="sectionPin">
      <div class="pin-wrap">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="project-card flex flex-row items-center bg-gray-800 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div class="w-1/2 p-12 flex flex-col justify-center text-white">
            <h3 class="text-3xl font-bold mb-4">{{ project.title }}</h3>
            <p class="text-lg">{{ project.description }}</p>
          </div>

          <div
            class="w-full h-full flex justify-center items-center bg-gray-100"
          >
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover"
            />
          </div>
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
    image: "/Fuji.jpeg",
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    image: "/restaurant.webp",
  },
  {
    title: "Project 3",
    description: "Description of Project 3",
    image: "/logoWhite.webp",
  },
]);

onMounted(() => {
  $gsap.registerPlugin(ScrollTrigger);

  const pinWrap = document.querySelector(".pin-wrap");
  const pinWrapWidth = pinWrap.scrollWidth;
  const horizontalScrollLength = pinWrapWidth - window.innerWidth;

  $gsap.to(".pin-wrap", {
    scrollTrigger: {
      trigger: "#sectionPin",
      pin: true,
      scrub: 1,
      start: "top top",
      end: () => `+=${pinWrapWidth}`,
    },
    x: -horizontalScrollLength,
    ease: "none",
  });
});
</script>

<style scoped>
#sectionPin {
  height: 80vh;
  overflow: hidden;
  display: flex;
}

.pin-wrap {
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 5vw;
}

.project-card {
  flex-shrink: 0;
  width: 70vw;
  height: 60vh;
  margin-right: 3rem;
  display: flex;
}
</style>
