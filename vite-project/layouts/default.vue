<template>
  <div class="min-h-screen flex flex-col bg-white text-gray-900">
    <header class="p-6 shadow-md bg-white z-50">
      <nav class="flex justify-between items-center max-w-6xl mx-auto">
        <h1
          class="text-xl md:text-xl font-extrabold text-gray-900 dark:text-dark leading-tight tracking-tight animate-fade-in"
        >
          Roo
          <span class="text-indigo-600 dark:text-indigo-400">Portfolio</span
          ><br />
        </h1>
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

    <footer
      class="p-6 bg-gray-100 dark:bg-gray-900 text-center text-sm text-gray-600 dark:text-gray-400"
    >
      <div class="flex justify-center space-x-4 mb-3">
        <a
          href="https://github.com/CodoWIzard"
          target="_blank"
          rel="noopener"
          class="hover:text-black dark:hover:text-white transition"
          aria-label="GitHub"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 0C5.37 0 0 5.373 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577 0-.286-.01-1.04-.015-2.04-3.338.727-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.832 2.807 1.303 3.492.997.107-.776.42-1.303.763-1.603-2.665-.303-5.466-1.336-5.466-5.934 0-1.31.468-2.382 1.235-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.005 2.047.137 3 .404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.243 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.805 5.628-5.475 5.922.43.37.823 1.103.823 2.222 0 1.605-.015 2.896-.015 3.293 0 .32.192.694.8.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12Z"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/jayden-de-roo-a27a801a7/"
          target="_blank"
          rel="noopener"
          class="hover:text-blue-600 transition"
          aria-label="LinkedIn"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M4.98 3.5C3.33 3.5 2 4.828 2 6.48c0 1.648 1.32 2.977 2.97 2.977h.03C6.63 9.457 7.95 8.128 7.95 6.48 7.95 4.828 6.63 3.5 4.98 3.5zM2.4 21.5h5.16v-12H2.4v12zM9.6 9.5v12h5.16v-6.56c0-3.497 4.2-3.78 4.2 0V21.5H24v-7.57c0-7.4-8.04-7.12-9.96-3.49V9.5H9.6z"
            />
          </svg>
        </a>
        <a
          href="https://app.daily.dev/blueeggs"
          target="_blank"
          rel="noopener"
          class="hover:text-purple-600 transition"
          aria-label="Daily.dev"
        >
          <!-- Replace this with actual Daily.dev SVG if available -->
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M6.85 2h10.3C18.94 2 20 3.06 20 4.85v14.3A2.85 2.85 0 0 1 17.15 22H6.85A2.85 2.85 0 0 1 4 19.15V4.85A2.85 2.85 0 0 1 6.85 2zm0 1.5a1.35 1.35 0 0 0-1.35 1.35v14.3c0 .746.604 1.35 1.35 1.35h10.3c.746 0 1.35-.604 1.35-1.35V4.85c0-.746-.604-1.35-1.35-1.35H6.85zM9 6h6v1.5H9V6zm0 3h6v1.5H9V9zm0 3h3v1.5H9V12z"
            />
          </svg>
        </a>
      </div>
      <p>
        &copy; {{ new Date().getFullYear() }} Jayden de Roo – All rights
        reserved.
      </p>
    </footer>
  </div>
</template>
