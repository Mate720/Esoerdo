<script setup lang="ts">
const props = defineProps<{
  title: string | undefined;
  description: string | undefined;
}>();
</script>

<template>
  <div class="p-5 bg-sky-500 rounded-xl">
    <NuxtImg src="/blankimg.png" />
    <div>
      <h2>{{ title }}</h2>
    </div>
    <div>
      <p>{{ description }}</p>
    </div>
    <div class="pt-5">
      <Button label="Test me!" />
    </div>
  </div>
</template>
