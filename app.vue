<template>
    <div class="bg-[#121212] text-center p-0">
      <div class="flex flex-col min-h-screen">
        <div class="flex">
          <div class="lg:pl-8 lg:pr-4 max-w-full">
            <div class="w-full flex justify-center">
              <NuxtLink to="/" class="mx-auto" aria-label="go to Home">
                <Logo class="w-28" />
              </NuxtLink>
            </div>
          </div>
        </div>
        <main class="min-h-100vh flex flex-col">
          <GsapAnimation />
        </main>

        <div class="svg-right absolute top-0 right-0 left-1/2 lg:left-2/3 pl-8 sm:pl-14 overflow-hidden">
          <BackgroundHomeRight class="w-full h-screen" />
        </div>
        <div class="svg-left absolute bottom-24 left-10 opacity-30 block overflow-hidden">
          <BackgroundHomeLeft class="w-full" />
        </div>
      </div>
    </div>
</template>

<style>
@import '@unocss/reset/tailwind.css';
</style>

