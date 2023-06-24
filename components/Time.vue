<script setup  lang="ts">
const currentTime = ref(Date.now())

const updateTime = () => {
    setTimeout(() => {
        currentTime.value = Date.now()
        updateTime()
    }, 100)
}
updateTime()
</script>

<template>
    <div>
        <div class="text-vernaillen text-5xl mb-8">
            <NuxtTime :datetime="Date.now()" month="long" day="numeric" weekday="long" time-zone="Europe/Brussels" locale="nl" />
        </div>
        <div class="text-white text-5xl mb-5">
            <NuxtTime :datetime="currentTime" second="numeric" minute="numeric" hour="numeric" time-zone="Europe/Brussels" locale="nl" class=" font-mono" />
        </div>
    </div>
</template>