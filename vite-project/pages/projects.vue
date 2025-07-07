<template>
  <section class="py-20 px-4 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-6xl mx-auto">
      <SectionTitle title="My Projects" />
      <p class="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl">
        Here I showcase some of my projects. Each project is tagged with the
        technologies used to make it. Click on a project to learn more.
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
    name: "Annex Bios",
    short: "A website made for browsing through an online theater",
    description:
      "A website for a fictive theather, made to browse through (upcoming) movies. Made by me and other members. Part of a bigger project. Visit the project for more information.",
    thumbnail: "/Annex.webp",
    tags: ["PHP", "CSS"],
    link: "https://github.com/CodoWIzard/Annex-Bios",
  },
  {
    id: 2,
    name: "Fiction Event PWA",
    short: "A PWA for users to check event information and more.",
    description: "PWA made with Vue",
    thumbnail: "/logoWhite.webp",
    tags: ["Vue", "TailwindCSS"],
    link: "https://wpa-app.vercel.app/",
  },
  {
    id: 3,
    name: "Happy Herbivore",
    short: "A self service kiosk application for a fictive company",
    description:
      "Able to filter, delete and order products. Take a look at the project to learn more.",
    thumbnail: "/restaurant.webp",
    tags: ["PHP", "TypeScript", "SCSS"],
    link: "https://github.com/CodoWIzard/hbc-software-solutions",
  },
  {
    id: 4,
    name: "Travel Blog Japan",
    short: "A static one pager for checking out top destinations in Japan.",
    description:
      "A static one pager. Comes along with a location mapper which needs fixing.",
    thumbnail: "/Fuji.jpeg",
    tags: ["HTML", "CSS"],
    link: "https://github.com/GLU-CSD/web-weekopdracht-3-infographic-CodoWIzard",
  },
  {
    id: 5,
    name: "Focus6",
    short: "A website made for a client's business.",
    description:
      "A project I collaborated on with other members. Visit the website to learn more.",
    thumbnail: "/focus.png",
    tags: ["Svelte", "TailwindCSS"],
    link: "https://www.focus6.nl/",
  },
  {
    id: 6,
    name: "Scientific Calculator",
    short: "A properly working and accurate calculator.",
    description: "Visit the project to experiment with the calculator.",
    thumbnail: "/calc.jpg",
    tags: ["JavaScript"],
    link: "https://analytics-demo.com",
  },
  {
    id: 7,
    name: "Comment Section Wall",
    short: "A wall able to comment to a video.",
    description:
      "A project to learn and exercise SQL and database methodologies.",
    thumbnail: "/comment.avif",
    tags: ["PHP", "SQL", "CSS"],
    link: "https://github.com/GLU-CSD/web-weekopdracht-2-comments-sectie-CodoWIzard",
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
