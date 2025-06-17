<template>
  <div class="max-w-xl mx-auto py-20 px-4">
    <SectionTitle title="Get in Touch" />
    <form
      action="https://formspree.io/f/yourformid"
      method="POST"
      class="space-y-4"
    >
      <input
        name="name"
        type="text"
        placeholder="Your Name"
        class="input"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        class="input"
        required
      />
      <textarea
        name="message"
        rows="5"
        placeholder="Your Message"
        class="input"
        required
      ></textarea>
      <button type="submit" class="btn btn-primary">Send Message</button>
    </form>
  </div>
</template>
