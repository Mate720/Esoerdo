<script setup lang="ts">
const categories = [
  {
    id: 1,
    title: "Animals",
    link: "/",
    description: "Questions only about animals",
    imgSource: "/blankImg.png",
  },
  {
    id: 2,
    title: "Plants",
    link: "/plants",
    description: "Questions only about plants",
    imgSource: "/blankImg.png",
  },
  {
    id: 3,
    title: "Everything",
    link: "/everything",
    description: "Questions about animals and plants",
    imgSource: "/blankImg.png",
  },
];
</script>

<template>
  <div class="quiz-list">
    <h1 class="text-center text-6xl m-2">Quizezz</h1>

    <div class="bg-amber-500 flex justify-around">
      <!-- :key must be on the element created by v-for -->
      <div v-for="card in categories" :key="card.id" class="mx-2">
        <QuizCard :title="card.title" :description="card.description" :img-source="card.imgSource" />
      </div>
    </div>
  </div>
</template>
