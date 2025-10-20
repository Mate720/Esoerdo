<script setup lang="ts">
const categories = [
  {
    id: 1,
    title: "Animals",
    link: "/animals",
    description: "Test your knowledge about the fascinating world of animals",
    icon: "🦁",
  },
  {
    id: 2,
    title: "Plants",
    link: "/plants",
    description: "Explore the amazing diversity of plant life",
    icon: "🌿",
  },
  {
    id: 3,
    title: "Everything",
    link: "/everything",
    description: "Challenge yourself with questions from all categories",
    icon: "🌍",
  },
];

const hoveredCard = ref<number | null>(null);
</script>

<template>
  <section class="">
    <div class="text-center mb-12">
      <h2 class="text-4xl sm:text-5xl font-bold mb-4">
        Choose Your <span class="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Category</span>
      </h2>
      <p class="text-lg text-white/90 max-w-2xl mx-auto font-bold">
        Select a quiz category below and start testing your knowledge.
      </p>
      <div class="flex items-center justify-center mt-12">
        <div class="flex gap-2 items-center bg-white w-fit justify-center px-6 py-3 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0d120e"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-info-icon lucide-info">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          <span class="text-sm text-black font-medium">
            Good Luck & Have Fun!
          </span>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      <div v-for="card in categories" :key="card.id" class="group relative" @mouseenter="hoveredCard = card.id"
        @mouseleave="hoveredCard = null">
        <div
          class="relative h-full rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white hover:-translate-y-2 bg-black">
          <div class="gradient-bg absolute inset-0 rounded-2xl" :class="{ 'active': hoveredCard === card.id }"></div>

          <div
            class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300">
          </div>

          <div class="relative p-8 flex flex-col h-full">
            <div class="mb-6">
              <div
                class="w-16 h-16 rounded-xl bg-[#eff6f1] flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                {{ card.icon }}
              </div>
            </div>

            <div class="flex-grow">
              <h3 class="text-2xl font-bold duration-300">
                {{ card.title }}
              </h3>
              <p class="leading-relaxed">
                {{ card.description }}
              </p>
            </div>

            <NuxtLink :to="card.link"
              class="mt-6 bg-primary text-black font-bold inline-flex items-center justify-center w-full px-6 py-3 text-base rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 group-hover:scale-105">
              Start Quiz
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>

            <div
              class="absolute top-4 right-4 bg-[#eff6f1] backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-md border border-gray-200">
              <span class="font-bold">PREMIUM</span> Questions
            </div>
          </div>

          <div class="absolute bottom-0 right-0 w-32 h-32 transform translate-x-8 translate-y-8">
            <div class="w-full h-full rounded-full bg-gradient-to-br opacity-10"></div>
          </div>
        </div>
      </div>
    </div>


  </section>
</template>

<style scoped>
.gradient-bg {
  background: linear-gradient(162deg, rgba(0, 0, 0, 1) 75%, rgba(82, 255, 134, 1) 100%);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;
}

.gradient-bg.active {
  opacity: 1;
}
</style>
