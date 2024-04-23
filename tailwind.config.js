/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: "333ms",
      },
      transitionTimingFunction: {
        DEFAULT: "ease-in-out",
      },
      colors: {
        background: {
          DEFAULT: "var(--background)",
          header: "var(--background-header)",
        },
      },
    },
  },
  plugins: [],
};
