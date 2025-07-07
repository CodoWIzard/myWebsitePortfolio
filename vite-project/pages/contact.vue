<template>
  <section class="py-20 px-4 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-3xl mx-auto text-center">
      <SectionTitle title="Get in Touch" />
      <p class="text-lg text-gray-700 dark:text-gray-300 mb-10">
        I'd love to hear from you! Whether you have a project in mind, want to
        collaborate, or just want to say hello—drop a message or connect with me
        below.
      </p>
    </div>

    <!-- Contact Form -->
    <div class="max-w-2xl mx-auto">
      <form
        action="https://formspree.io/f/mblyebpo"
        method="POST"
        class="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl"
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          class="w-full px-5 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          class="w-full px-5 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          class="w-full px-5 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        ></textarea>
        <button
          type="submit"
          class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg text-lg font-semibold shadow-lg hover:scale-105 transform transition"
        >
          Send Message
        </button>
      </form>
    </div>

    <!-- Social Media Links -->
    <div class="mt-16 text-center space-y-6">
      <div class="flex justify-center gap-6">
        <a
          href="mailto:jayden.budike@gmail.com"
          class="text-indigo-600 dark:text-indigo-400 hover:text-purple-600 transition text-xl"
        >
          <i class="fas fa-envelope"></i>
        </a>
      </div>

      <!-- GitHub Button -->
      <div class="mt-8">
        <a
          href="https://github.com/CodoWIzard"
          target="_blank"
          class="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition transform"
        >
          View My GitHub →
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// maybe for later
</script>
