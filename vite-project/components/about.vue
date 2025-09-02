<script setup>
const tags = [
  "Vue",
  "Nuxt",
  "TailwindCSS",
  "PHP",
  "Java Spring",
  "Agile",
  "Prototyping",
  "UI/UX",
  "Web Designing",
  "Git Bash",
  "Version Control",
];

const interests = [{}];
</script>

<template>
  <section id="about" class="py-20 px-4 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
      <!-- Profile Card -->
      <div
        class="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 flex flex-col items-center text-center"
      >
        <img
          src="/public/jayjay.jpg"
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
          I'm a student developer, always eager to learn new things, especially
          when it comes to the backend. I developed my own style for my
          projects. I love clean, minimalistic and sleek design when it comes to
          the frontend. It's also adaptable to other styles and it makes things
          instantly look professional.
        </p>
        <p class="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          But my true passion rests in the backend and engineering. I still have
          much to learn, but making things functional and secure is something
          very satisfying. Whether it's making a bot, tool, website or any other
          application, I'm ready for any project and love to challenge myself.
        </p>
      </div>
    </div>

    <!-- Interests Gallery -->
    <div class="mt-20 max-w-6xl mx-auto">
      <h3 class="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Interests and hobbies
      </h3>

      <div class="max-w-3xl mx-auto">
        <div
          class="rounded-3xl bg-white/10 backdrop-blur-sm dark:bg-white/5 p-8 shadow-lg text-left border border-white/20 dark:border-gray-700 transform transition duration-300 hover:scale-[1.03] hover:-rotate-1"
        >
          <SectionTitle title="About Me" />
          <div
            class="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
          >
            <p>
              ⚾ I love watching and playing baseball. One day I'd love to be a
              proficient catcher!
            </p>
            <p>
              🏉 Not only do I love baseball, but playing rugby is also very
              fun!
            </p>
            <p>
              🏝️ My habitat is the sand, sea and palm trees. Loving water
              activities and enjoying slow, comfortable days.
            </p>
            <p>⛰️ Hiking and mountain climbing is awesome!</p>
            <p>
              📖 When I'm not physically active, I love to read philosophy and
              practicing it in life itself.
            </p>
            <p>
              🔭 I truly love science! Whether it's about the stars, the ocean,
              history or the future, I'm up to educate myself to the fullest.
            </p>
            <p>
              👨‍💻 And of course is programming a big part of my life. I work on
              own projects, challenges or watch tutorials. Anything that can
              bring me further!
            </p>
            <p>
              ❔ Interested in more about me? Check out the button below and
              let's chat!
            </p>
          </div>
          >
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
