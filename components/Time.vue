<script setup lang="ts">
defineProps({
    isHarmonics: {
        type: Boolean,
        default: false
    }
})

const currentTime = ref(Date.now())

const updateTime = () => {
    setTimeout(() => {
        currentTime.value = Date.now()
        updateTime()
    }, 1000)
}
updateTime()
</script>

<template>
    <div class="absolute bottom-0 left-0 right-0 mx-auto">
        <div class="text-avocado font-semibold text-5xl mb-12">
            <NuxtTime 
            :datetime="Date.now()" month="long" day="numeric" weekday="long" time-zone="Europe/Brussels" locale="nl"
            :class="isHarmonics ? 'font-mono' : 'font-monteserrat'" />
        </div>
        <div
            :class="isHarmonics ? 'text-black' : 'text-white'" 
            class="text-6xl mb-20"
        >
            <NuxtTime 
                :datetime="currentTime" second="numeric" minute="numeric" hour="numeric" time-zone="Europe/Brussels" locale="nl" 
                class="font-mono" />
        </div>
    </div>
</template>