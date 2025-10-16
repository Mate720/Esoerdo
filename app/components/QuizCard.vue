<script setup lang="ts">
const props = defineProps<{
  title: string|undefined
  description: string|undefined
  link: string| undefined
}>()
</script>

<template>
  <div class="p-5 bg-sky-500 rounded-xl">
    <NuxtImg src="/blankimg.png" />
    <div>
      <h2>{{title}}</h2>
    </div>
    <div>
      <p>{{description}}</p>
    </div>
        <NuxtLink class="hover:text-accent duration-300" :to="link">Test me!</NuxtLink>
  </div>
</template>