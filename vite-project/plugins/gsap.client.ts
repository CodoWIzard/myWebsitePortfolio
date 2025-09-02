import { defineNuxtPlugin } from "#app";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin, ScrollSmoother } from "gsap/all";

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

  return {
    provide: {
      gsap,
      ScrollSmoother,
    },
  };
});
