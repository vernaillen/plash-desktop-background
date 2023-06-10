
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
  ],

  build: {
    transpile: ['gsap'],
  },

  devtools: { enabled: true }
})