<template>
  <section
    class="min-h-screen flex flex-col justify-center items-center text-center px-4"
  >
    <h1 class="text-4xl md:text-6xl font-bold leading-tight">
      Hi, I’m <span class="text-indigo-500">Your Name</span>
    </h1>
    <p class="text-lg mt-4 max-w-xl">
      I build sleek, performant websites with a touch of art. Custom, modern and
      powerful.
    </p>
    <div class="mt-8 flex gap-4">
      <NuxtLink to="/projects" class="btn btn-primary">See My Work</NuxtLink>
      <NuxtLink to="/contact" class="btn btn-outline">Contact Me</NuxtLink>
    </div>
  </section>
</template>
