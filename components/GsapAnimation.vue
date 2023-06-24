<script setup>
import gsap from 'gsap'

const main = ref()
const tl = ref()
const ctx = ref()

const toggleTimeline = () => {
  setTimeout(() => {
    tl.value.reversed(!tl.value.reversed())
    toggleTimeline()
  }, 10000)
}

onMounted(() => {
  ctx.value = gsap.context((self) => {
    const boxes = self.selector('.box')
    tl.value = gsap
      .timeline()
      .to(boxes[0], { x: 120, rotation: 360 })
      .to(boxes[1], { x: -120, rotation: -360 }, '<')
      .to(boxes[2], { y: -166 })
      .reverse()
  }, main.value) // <- Scope!
  tl.value.reversed(!tl.value.reversed())
  toggleTimeline()
})

onUnmounted(() => {
  ctx.value.revert() // <- Easy Cleanup!
})
</script>

<template>
  <section ref="main" class="boxes-container">
    <div class="box bg-vernaillen bg-opacity-80" />
    <div class="box bg-vernaillen bg-opacity-60" />
    <div class="box bg-vernaillen bg-opacity-40" />
  </section>
</template>

<style>
.boxes-container {
    width: 100%;
    height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
}
.box {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    font-size: 24px;
    text-align: center;
    line-height: 100px;
}
</style>
