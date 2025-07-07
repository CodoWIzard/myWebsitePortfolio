<template>
  <section class="min-h-screen flex items-center justify-center bg-white">
    <div class="text-center max-w-3xl">
      <h1
        class="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-dark leading-tight tracking-tight animate-fade-in"
      >
        Hi, I'm
        <span class="text-indigo-600 dark:text-indigo-400">Jayden.</span><br />
      </h1>

      <p
        class="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 animate-fade-in delay-200"
      >
        Aspiring Software Engineer
      </p>

      <div class="mt-8 animate-fade-in delay-300">
        <NuxtLink
          to="Projects"
          class="inline-block px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium text-lg hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 transition-all dark:focus:ring-indigo-800"
        >
          Get inspired by my projects! 👆
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out both;
}

.delay-200 {
  animation-delay: 0.2s;
}
.delay-300 {
  animation-delay: 0.3s;
}
</style>
