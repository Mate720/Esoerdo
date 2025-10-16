<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  imgSource?: string;
  link: string;
  
}>();
</script>

<template>
  <article class="p-5 bg-sky-500 rounded-xl">
    <NuxtImg :src="imgSource ?? '/blankImg.png'" alt="card image" />
    <div>
      <h2>{{ title }}</h2>
    </div>
    <div>
      <p>{{ description }}</p>
    </div>
        <NuxtLink class="hover:text-accent duration-300" :to="link">Test me!</NuxtLink>
    <div class="pt-5"></div>
  </article>
</template>
