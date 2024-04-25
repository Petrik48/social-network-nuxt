// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxt/eslint",
    "nuxt-svgo",
    "nuxt-icon",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: true,
        },
      },
    ],
  ],
  shadcn: {
    prefix: "Ui",
    componentDir: "./components/ui",
  },
  pinia: {
    storesDirs: ["./store/**"],
  },
  svgo: {
    svgo: true,
    defaultImport: "component",
    svgoConfig: {
      multipass: true,
      removeViewBox: false,
    },
  },
});
