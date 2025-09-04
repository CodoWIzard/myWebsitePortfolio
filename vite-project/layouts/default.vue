<script setup>
import { onMounted, onBeforeUnmount } from "vue";
const { $gsap, $ScrollSmoother } = useNuxtApp();

function scrollToSection(id) {
  $gsap.to(window, {
    duration: 1,
    scrollTo: `#${id}`,
    ease: "power2.inOut",
  });
}

onMounted(() => {
  // Smooth scroll
  $ScrollSmoother.create({
    wrapper: "#__nuxt",
    content: "main",
    smooth: 1.2,
    effects: true,
  });

  // Cursor animation
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

  // Magnetic nav links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("mousemove", (e) => {
      const { left, top, width, height } = link.getBoundingClientRect();
      const x = e.clientX - (left + width / 2);
      const y = e.clientY - (top + height / 2);
      $gsap.to(link, {
        x: x * 0.3,
        y: y * 0.3,
        scale: 1.1,
        duration: 0.3,
      });
    });
    link.addEventListener("mouseleave", () => {
      $gsap.to(link, { x: 0, y: 0, scale: 1, duration: 0.3 });
    });
  });
});
</script>

<template>
  <div id="__nuxt" class="min-h-screen flex flex-col bg-white text-gray-900">
    <!-- Shapes background -->
    <div class="shapes absolute inset-0 pointer-events-none">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>

    <!-- Cursor -->
    <div class="cursor"></div>

    <!-- Header -->
    <header
      id="header"
      class="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-screen"
    >
      <!-- Logo -->
      <h1
        class="text-3xl md:text-4xl font-extrabold tracking-tight text-white hover:text-yellow-300 transition-colors duration-300 cursor-pointer"
      >
        Jayden<span class="text-yellow-400">.</span>
      </h1>

      <!-- Nav -->
      <ul class="flex gap-10 text-lg font-medium text-white">
        <li>
          <a
            href="#hero"
            class="nav-link relative transition-colors duration-300"
            @click.prevent="scrollToSection('hero')"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#projects"
            class="nav-link relative transition-colors duration-300"
            @click.prevent="scrollToSection('projects')"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#about"
            class="nav-link relative transition-colors duration-300"
            @click.prevent="scrollToSection('about')"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            class="nav-link relative transition-colors duration-300"
            @click.prevent="scrollToSection('contact')"
          >
            Contact
          </a>
        </li>
      </ul>
    </header>

    <main class="flex-grow pt-24">
      <slot />
    </main>
  </div>
</template>

<style scoped>
/* Cursor */
body,
* {
  cursor: none;
}
.cursor {
  background: rgba(255, 255, 255, 0.9);
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
  border-radius: 50%;
  z-index: 1000;
  position: fixed;
  mix-blend-mode: difference;
  pointer-events: none;
  transition: transform 0.15s ease;
}

/* Shapes */
.shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
}
.shape-1 {
  background: #005ffe;
  width: 600px;
  height: 600px;
  margin: -300px 0 0 -300px;
}
.shape-2 {
  background: #ff57a6;
  width: 400px;
  height: 400px;
  margin: -200px 0 0 -200px;
}
.shape-3 {
  background: #ffd257;
  width: 250px;
  height: 250px;
  margin: -125px 0 0 -125px;
}

/* Nav links fancy underline */
.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0;
  height: 2px;
  background: currentColor;
  transition: width 0.3s ease;
}
.nav-link:hover::after {
  width: 100%;
}
</style>
