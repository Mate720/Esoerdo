<script setup lang="ts">

const categories = [
    {
        key: 1,
        title: "Animals",
        link: "/",
        description: "Questions only about animals",
        imgSource: "/blankImg.png"
    },
    {
        key: 2,
        title: "Plants",
        link: "/plants",
        description: "Questions only about plants",
        imgSource: "/blankImg.png"
    },
    {
        key: 3,
        title: "Everything",
        link: "/everything",
        description: "Questions about animals and plants",
        imgSource: "/blankImg.png"
    },
]
    
</script>

<template>
    <h1 class="text-center text-6xl m-2">Quizezz</h1>
  <div class="bg-amber-500 flex justify-around">
    <div v-for="(card,index) in categories">
      <QuizCard :title="categories[index]!.title" :description="categories[index]!.description" :key="categories[index]!.key"  />
    </div>
  </div>
</template>