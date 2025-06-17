<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition hover:scale-105 hover:shadow-xl duration-300"
  >
    <img :src="project.image" alt="" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h3 class="text-xl font-semibold">{{ project.title }}</h3>
      <p class="text-sm text-gray-600 mt-2">{{ project.description }}</p>
      <div class="flex flex-wrap mt-4 gap-2">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["project"]);
</script>
