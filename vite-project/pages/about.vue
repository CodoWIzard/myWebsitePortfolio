<template>
  <section class="py-20 px-4 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
      <!-- Profile Card -->
      <div
        class="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 flex flex-col items-center text-center"
      >
        <img
          src=""
          alt="Jayden"
          class="w-32 h-32 rounded-full object-cover mb-4 border-4 border-indigo-500 shadow-md"
        />
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Jayden</h2>
        <p class="text-indigo-600 dark:text-indigo-400 font-medium mb-4">
          Aspiring Software Engineer
        </p>

        <div class="flex flex-wrap justify-center gap-2">
          <span
            v-for="tag in tags"
            :key="tag"
            class="bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100 text-sm font-medium px-3 py-1 rounded-full shadow-sm transition hover:scale-105"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- About Content -->
      <div>
        <SectionTitle title="About Me" />
        <p
          class="mb-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
        >
          I’m a passionate frontend developer who merges clean design with
          functional tech. I work with Vue, Nuxt, Tailwind, Node.js, and more.
        </p>
        <p class="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Whether it's a slick dashboard, portfolio, eCommerce site, or
          full-stack web app, I turn client dreams into pixel-perfect reality.
        </p>
      </div>
    </div>

    <!-- Interests Gallery -->
    <div class="mt-20 max-w-6xl mx-auto">
      <h3 class="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Interests and hobbies
      </h3>

      <div
        class="relative flex gap-6 overflow-x-auto scroll-smooth px-1 -mx-1 pb-8"
        style="scrollbar-width: none"
      >
        <div
          v-for="interest in interests"
          :key="interest.name"
          class="flex-shrink-0 w-48 h-56 rounded-3xl bg-white/10 backdrop-blur-sm dark:bg-white/5 p-5 shadow-lg text-center border border-white/20 dark:border-gray-700 transform transition duration-300 hover:scale-[1.03] hover:-rotate-1 cursor-pointer"
        >
          <div
            class="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-1"
          >
            <img
              :src="interest.image"
              :alt="interest.name"
              class="w-full h-full object-contain bg-white rounded-full p-2"
            />
          </div>
          <p class="text-md font-semibold text-gray-800 dark:text-gray-100">
            {{ interest.name }}
          </p>
        </div>
      </div>

      <!-- Contact Button -->
      <div class="mt-14 text-center">
        <NuxtLink
          to="/contact"
          class="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transform transition focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800"
        >
          Contact Me
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const tags = [
  "Vue",
  "Nuxt",
  "TailwindCSS",
  "JavaScript",
  "Node.js",
  "Responsive UI",
  "Design Systems",
];

const interests = [
  { name: "Design", image: "/interests/design.svg" },
  { name: "Tech Gadgets", image: "/interests/gadget.svg" },
  { name: "Travel", image: "/interests/travel.svg" },
];
</script>
