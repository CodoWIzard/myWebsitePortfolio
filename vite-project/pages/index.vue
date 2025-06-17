<template>
  <div>
    <Hero />
    <section class="py-16 px-4">
      <SectionTitle title="Featured Work" />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard
          v-for="project in featuredProjects"
          :key="project.id"
          :project="project"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import Hero from "@/components/hero.vue";
import SectionTitle from "@/components/sectionTitle.vue";
import ProjectCard from "@/components/projectCard.vue";

const featuredProjects = [
  {
    id: 1,
    title: "Modern Dashboard UI",
    description: "Admin dashboard with charts and auth system",
    image: "/images/project1.png",
    tags: ["Vue", "Tailwind", "Chart.js"],
  },
  // Add more...
];
</script>
