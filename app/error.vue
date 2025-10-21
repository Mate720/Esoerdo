<script setup lang="ts">
import type { NuxtError } from "#app"

const props = defineProps({
  error: Object as () => NuxtError,
})
</script>

<template>
  <div class="flex flex-col gap-2 items-center justify-center w-full min-h-screen text-white">
    <h1
      class="text-wrap uppercase font-bold text-[20vw] lg:text-[18vw] leading-none bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
      {{ error!.statusCode }}</h1>
    <NuxtLink
      class="hover:bg-primary/80 duration-300 font-bold text-[3.2vw] lg:text-[2vw] rounded bg-primary text-[#09100b] px-2 py-1"
      to="/">Go Back To Home! 🏡</NuxtLink>
  </div>
</template>
