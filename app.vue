<script setup lang="ts">
useHead({
  titleTemplate: () => `Wouter Vernaillen\'s Plash Desktop Background`,
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { name: 'description', content: 'Vernaillen.dev Plash desktop background' },
    { name: 'robots', content: 'noindex, nofollow'}
  ],
  link: [
    {
      rel: 'icon',
      href: '/favicon.svg',
      type: 'image/svg+xml'
    },
    {
      href: 'https://fonts.googleapis.com',
      rel: 'preconnect'
    },
    {
      href: 'https://fonts.gstatic.com',
      rel: 'preconnect',
      crossorigin: ''
    }
  ]
})
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
@import '@unocss/reset/tailwind.css';
</style>

