<template>
  <div class="min-h-screen flex flex-col bg-white text-gray-900">
    <header class="p-6 shadow-md bg-white z-50">
      <nav class="flex justify-between items-center max-w-6xl mx-auto">
        <h1 class="text-xl font-bold text-indigo-600">MyPortfolio</h1>
        <ul class="flex gap-6 text-sm font-medium">
          <li>
            <NuxtLink to="/" class="hover:text-indigo-600">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projects" class="hover:text-indigo-600"
              >Projects</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/about" class="hover:text-indigo-600">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="hover:text-indigo-600"
              >Contact</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="p-6 bg-gray-100 text-center text-sm text-gray-500">
      &copy; {{ new Date().getFullYear() }} Your Name. All rights reserved.
    </footer>
  </div>
</template>
