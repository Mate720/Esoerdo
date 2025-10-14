<script setup lang="ts">
const titles = ["Animals","Plants", "Everything"]
</script>

<template>
    <h1 class="text-center text-6xl m-2">Quizezz</h1>
  <div class="bg-amber-500 flex justify-around">
    <div v-for="(card, index) in 3">
      <QuizCard :text="titles[index]"  />
    </div>
  </div>
</template>