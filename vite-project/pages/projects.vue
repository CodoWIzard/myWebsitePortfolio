<template>
  <section class="py-20 px-4 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-6xl mx-auto">
      <SectionTitle title="My Projects" />
      <p class="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl">
        Here are some of the ideas I've brought to life. Click on any project to
        learn more about the stack, goals, and process behind it.
      </p>

      <!-- Project Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in projects"
          :key="project.id"
          @click="openModal(project)"
          class="cursor-pointer bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] hover:shadow-2xl transition duration-300"
        >
          <img
            :src="project.thumbnail"
            :alt="project.name"
            class="w-full h-48 object-cover"
          />
          <div class="p-5">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ project.name }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
              {{ project.short }}
            </p>
            <div class="mt-3 flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-xs font-medium px-3 py-1 bg-indigo-100 dark:bg-indigo-800 dark:text-indigo-100 text-indigo-800 rounded-full"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="selectedProject"
      class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
    >
      <div
        class="bg-white dark:bg-gray-900 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative"
      >
        <button
          @click="selectedProject = null"
          class="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition text-xl"
        >
          &times;
        </button>
        <img
          :src="selectedProject.thumbnail"
          class="w-full h-56 object-cover rounded-xl mb-4"
          :alt="selectedProject.name"
        />
        <h3 class="text-2xl font-bold text-gray-800 dark:text-white">
          {{ selectedProject.name }}
        </h3>
        <p class="text-gray-700 dark:text-gray-300 mt-2">
          {{ selectedProject.description }}
        </p>
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="tag in selectedProject.tags"
            :key="tag"
            class="text-sm font-medium px-3 py-1 bg-indigo-100 dark:bg-indigo-800 dark:text-indigo-100 text-indigo-800 rounded-full"
          >
            {{ tag }}
          </span>
        </div>
        <div class="mt-6 text-right">
          <a
            :href="selectedProject.link"
            target="_blank"
            class="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition"
          >
            Visit Project →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const selectedProject = ref(null);

const openModal = (project) => {
  selectedProject.value = project;
};

const projects = [
  {
    id: 1,
    name: "Portfolio Site",
    short: "A sleek developer portfolio built with Nuxt and Tailwind.",
    description:
      "This responsive and accessible portfolio website showcases my work, skills, and personality. It features Nuxt.js for SSR and TailwindCSS for styling.",
    thumbnail: "/projects/portfolio.png",
    tags: ["Nuxt", "TailwindCSS", "Vue", "Design"],
    link: "https://yourportfolio.com",
  },
  {
    id: 2,
    name: "E-Commerce UI",
    short: "A modern frontend for an online store.",
    description:
      "Built a dynamic and responsive UI for a fashion e-commerce store using Vue, animations, and reusable components.",
    thumbnail: "/projects/ecommerce.png",
    tags: ["Vue", "UI/UX", "eCommerce", "Animations"],
    link: "https://ecommerce-demo.com",
  },
  {
    id: 3,
    name: "Analytics Dashboard",
    short: "A full-featured dashboard for tracking metrics.",
    description:
      "Includes charts, user management, and responsive cards using Tailwind, Vue, and Chart.js. Designed for SaaS startups.",
    thumbnail: "/projects/dashboard.png",
    tags: ["Vue", "Tailwind", "Chart.js", "Node.js"],
    link: "https://analytics-demo.com",
  },
  {
    id: 4,
    name: "Analytics Dashboard",
    short: "A full-featured dashboard for tracking metrics.",
    description:
      "Includes charts, user management, and responsive cards using Tailwind, Vue, and Chart.js. Designed for SaaS startups.",
    thumbnail: "/projects/dashboard.png",
    tags: ["Vue", "Tailwind", "Chart.js", "Node.js"],
    link: "https://analytics-demo.com",
  },
];
</script>

<style scoped>
/* Optional: clamp text neatly */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
