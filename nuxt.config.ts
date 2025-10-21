import tailwindcss from "@tailwindcss/vite";
import Aura from "@primeuix/themes/aura";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/globals.css"],
  vite: {
    plugins: [tailwindcss()]
  },
  modules: ["@primevue/nuxt-module", "@nuxt/image"],
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
    }
  },
  routeRules: {
    "/gallery": { ssr: false }
  }
})