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
        <div class="text-vernaillen font-mono font-semibold text-5xl mb-5">
            <NuxtTime :datetime="Date.now()" month="long" day="numeric" weekday="long" time-zone="Europe/Brussels" locale="nl" />
        </div>
        <div class="text-white font-mono text-5xl mb-5">
            <NuxtTime :datetime="currentTime" second="numeric" minute="numeric" hour="numeric" time-zone="Europe/Brussels" locale="nl" />
        </div>
    </div>
</template>