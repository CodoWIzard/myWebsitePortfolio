<template>
  <div>
    <Intro />
    <!-- intro component -->

    <!-- Hero Section -->
    <hero />

    <!-- Projects Section -->
    <projects />

    <!-- About Section -->
    <about />

    <!-- Contact Section -->
    <contact />
  </div>
</template>

<script setup>
import Intro from "@/components/intro.vue";
import Hero from "@/components/hero.vue";
import about from "@/components/about.vue";
import contact from "@/components/contact.vue";
import projects from "@/components/projects.vue";
</script>
