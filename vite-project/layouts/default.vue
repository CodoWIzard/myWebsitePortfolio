<script setup>
const { $gsap, $ScrollSmoother } = useNuxtApp();

onMounted(() => {
  $ScrollSmoother.create({
    wrapper: "#__nuxt",
    content: "main",
    smooth: 1.2,
    effects: true,
  });

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
});

function scrollToSection(id) {
  $gsap.to(window, {
    duration: 1,
    scrollTo: `#${id}`,
    ease: "power2.inOut",
  });
}
</script>

<template>
  <div id="__nuxt" class="min-h-screen flex flex-col bg-white text-gray-900">
    <!-- Shapes following the cursor -->
    <div class="shapes absolute inset-0">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>

    <!-- Custom cursor -->
    <div class="cursor"></div>

    <header id="header" class="p-6 bg-white z-40 fixed w-full opacity-0">
      <nav class="flex justify-between items-center max-w-6xl mx-auto">
        <h1
          class="text-6xl md:text-6xl text-gray-900 leading-tight tracking-tight animate-fade-in text-left"
        >
          !!NOT FINISHED!!
          <!-- <span class="text-gray-900">Portfolio</span> -->
        </h1>

        <ul class="flex gap-6 text-2xl">
          <li>
            <a
              href="#hero"
              class="hover:text-indigo-600"
              @click.prevent="scrollToSection('hero')"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#projects"
              class="hover:text-indigo-600"
              @click.prevent="scrollToSection('projects')"
              >Project</a
            >
          </li>
          <li>
            <a
              href="#about"
              class="hover:text-indigo-600"
              @click.prevent="scrollToSection('about')"
              >About</a
            >
          </li>
          <li>
            <a
              href="#contact"
              class="hover:text-indigo-600"
              @click.prevent="scrollToSection('contact')"
              >Contact</a
            >
          </li>
        </ul>
      </nav>
    </header>

    <main class="flex-grow pt-24">
      <slot />
    </main>
  </div>
</template>

<style scoped>
body,
* {
  cursor: none;
}

/* Small circle cursor */
.cursor {
  background: #2128bd;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
  border-radius: 50%;
  z-index: 1000;
  position: fixed;
  pointer-events: none;
}
</style>
