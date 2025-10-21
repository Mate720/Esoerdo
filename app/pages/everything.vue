<script setup lang="ts">
import { useEveryQuestions } from '~/composable/useEveryQuestions';
const { questions, next, correct, actual, checkAnswer, onSelect, reset, resultMessage, quit, confirmDialogAnswer, confirmDialogVisible, selectedIndex, showConfirmDialog, onBeforeRouteLeave } = useEveryQuestions();
onBeforeRouteLeave((to, from) => {
  return showConfirmDialog(); 
});
</script>

<template>
  <section class="max-w-4xl mx-auto px-4 py-8">
    <UpdatingTips />
    <Toast position="bottom-right" group="br" />

    <div class="text-center mb-12">
      <h1 class="text-4xl sm:text-5xl font-bold mb-4">
        <span class="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Animals Quiz</span>
      </h1>
    </div>

    <Dialog v-model:visible="confirmDialogVisible" pt:root:class="!border-0 !bg-transparent"
      pt:mask:class="backdrop-blur-sm" :dismissableMask="false" persistent>
      <template #container="{ closeCallback }">
        <div class="flex flex-col px-8 py-8 gap-6 rounded-2xl bg-black border border-white shadow-2xl">
          <h2 class="text-white text-2xl font-bold text-center">Are you sure you want to quit?</h2>
          <p class="text-white/80 text-center">Your progress will be lost.</p>
          <div class="flex gap-4">
            <button @click="() => { confirmDialogAnswer(false); closeCallback(); }"
              class="flex-1 px-6 py-3 rounded-xl border border-white bg-transparent text-white font-bold hover:bg-white/10 transition-all duration-300">
              Cancel
            </button>
            <button @click="() => { confirmDialogAnswer(true); closeCallback(); }"
              class="flex-1 px-6 py-3 rounded-xl bg-primary text-black font-bold hover:shadow-xl transition-all duration-300">
              Confirm
            </button>
          </div>
        </div>
      </template>
    </Dialog>

    <section v-if="next < 10" class="space-y-8">
      <div class="bg-black border border-white rounded-2xl p-6 shadow-lg">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-2">
          <h2 class="text-2xl font-bold text-white">
            Score: <span class="text-primary">{{ correct }}</span> / 10
          </h2>
          <div class="text-white/70 font-medium">
            Question {{ next + 1 }} of 10
          </div>
        </div>
      </div>

      <div class="bg-black border border-white rounded-2xl p-8 shadow-lg">
        <h3 class="text-2xl font-bold text-white mb-6">
          {{ questions[actual]?.question }}
        </h3>

        <div class="flex flex-col gap-4">
          <label v-for="(choice, index) in questions[actual]?.answers" :key="index"
            class="flex items-center gap-4 p-4 rounded-xl border border-white/30 bg-transparent hover:bg-white/5 transition-all duration-300 cursor-pointer"
            :class="{ 'bg-primary/10 border-primary': selectedIndex === index }"
            @click="() => { onSelect(index); selectedIndex = index; }">
            <input type="radio" :value="choice" :checked="selectedIndex === index"
              class="w-5 h-5 cursor-pointer accent-primary" />
            <span class="text-white font-medium flex-1">
              {{ choice }}
            </span>
          </label>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-4">
        <button @click="checkAnswer()"
          class="bg-primary text-black font-bold px-6 py-4 text-lg rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
          Check Answer
        </button>
        <button @click="quit()"
          class="px-6 py-4 text-lg rounded-xl border border-white bg-transparent text-white font-bold hover:bg-white/10 transition-all duration-300">
          Quit Test
        </button>
      </div>
    </section>

    <section v-else class="space-y-8">
      <div class="bg-black border border-white rounded-2xl p-8 sm:p-12 shadow-2xl text-center">
        <div class="mb-8">
          <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
            Quiz Complete! 🎉
          </h2>
          <p class="text-5xl sm:text-6xl font-bold mb-4">
            <span class="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              {{ correct }} / 10
            </span>
          </p>
          <p class="text-xl text-white/80 font-medium">
            {{ resultMessage }}
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/quiz" @click="reset()"
            class="bg-transparent border border-white text-white font-bold px-8 py-4 text-lg rounded-xl hover:bg-white/10 transition-all duration-300">
            Go Back
          </NuxtLink>
          <button @click="reset()"
            class="bg-primary text-black font-bold px-8 py-4 text-lg rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
            Restart Quiz
          </button>
        </div>
      </div>

      <div class="flex items-center justify-center">
        <div class="flex gap-2 items-center bg-white w-fit justify-center px-6 py-3 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0d120e"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-info-icon lucide-info">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          <span class="text-center text-sm text-black font-medium">
            Challenge yourself again!
          </span>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped>
button {
  transition: all 0.3s ease;
}
</style>
