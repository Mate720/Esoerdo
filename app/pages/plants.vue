<script setup lang="ts">
import { usePlantQuestions } from '~/composable/usePlantQuestions';
const { questions, next, correct, actual, checkAnswer, onSelect, reset, resultMessage, quit, confirmDialogAnswer, confirmDialogVisible } = usePlantQuestions();
</script>

<template>
  <section>
    <UpdatingTips />
    <Toast position="bottom-right" group="br" />
    <h1>Plants Quiz</h1>
  </section>

  <Dialog v-model:visible="confirmDialogVisible" pt:root:class="!border-0 !bg-transparent"
    pt:mask:class="backdrop-blur-sm" :dismissableMask="false" persistent>
    <template #container="{ closeCallback }">
      <div class="flex flex-col px-8 py-8 gap-6 rounded-2xl"
        style="background-image: radial-gradient(circle at left top, var(--p-primary-400), var(--p-primary-700))">
        <h2 class="text-primary-50 text-lg font-semibold text-center">Are you sure you want to quit?</h2>
        <p class="text-primary-100 text-center">Your progress will be lost.</p>
        <div class="flex gap-4">
          <Button label="Cancel" @click="() => { confirmDialogAnswer(false); closeCallback(); }" variant="text"
            class="!p-4 w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10" />
          <Button label="Confirm" @click="() => { confirmDialogAnswer(true); closeCallback(); }" variant="text"
            class="!p-4 w-full !text-primary-50 !border !border-white/30 hover:!bg-white/10" />
        </div>
      </div>
    </template>
  </Dialog>


  <section v-if="next < 10">
    <h1>Score: 10 / {{ correct }}</h1>
    <h3>{{ questions[actual]?.question }}</h3>
    <div>
      <div>
        <RadioButtonGroup class="flex flex-col">
          <div v-for="(choice, index) in questions[actual]?.answers">
            <RadioButton :value="choice" @change="() => onSelect(index)" />
            <label>{{ choice }}</label>
          </div>
        </RadioButtonGroup>
      </div>
      <button class="bg-accent p-2 text-xl rounded-md cursor-pointer" type="button" @click="checkAnswer()">Check
        answer</button>
      <button class="bg-accent p-2 text-xl rounded-md cursor-pointer" type="button" @click="quit()">
        Quit test
      </button>
    </div>
  </section>

  <section v-else>
    <p>End of Quiz</p>
    <p>Results: 10 / {{ correct }}</p>
    <p>{{ resultMessage }}</p>
    <div class="flex justify-center">
      <NuxtLink class="bg-accent p-2 text-xl rounded-md  cursor-pointer" to="/quiz" @click="reset()">Go back!
      </NuxtLink>
      <button class="bg-accent p-2 text-xl rounded-md  cursor-pointer" type="button" @click="reset()">Restart</button>
    </div>
  </section>
</template>


<style>
button {
  transition: background-color 0.5s ease, color 0.5s ease;
}

button:hover {
  background-color: #fff;
  color: #32c35e;
}
</style>
