// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  content: {
    highlight: {
      theme: 'github-dark', // You can use 'github-light', 'nord', etc.
    },
  },
  typescript: {
    tsConfig: {
      "compilerOptions": {
        "types": ["@nuxt/content", "./types/content"]
      }
    }
  }
})