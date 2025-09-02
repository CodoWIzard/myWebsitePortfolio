// tailwind.config.js
export default {
  theme: {
    extend: {
      keyframes: {
        rainbow: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        rainbow: "rainbow 6s linear infinite",
      },
    },
  },
};
