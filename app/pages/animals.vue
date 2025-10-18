<script setup lang="ts">
import { useAnimalQuestions } from '~/composable/useAnimalQuestions';
const { questions, next, correct, actual, checkAnswer, onSelect, reset, resultMessage,quit } = useAnimalQuestions();
</script>

<template>
    <section>
        <Toast position="bottom-right" group="br" />
        <h1>Animal Quiz</h1>
    </section>
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
                <NuxtLink class="bg-accent p-2 text-xl rounded-md  cursor-pointer" to="/quiz" @click="quit()">Quit test
            </NuxtLink>
        </div>
    </section>

    <section v-else>
        <p>End of Quiz</p>
        <p>Results: 10 / {{ correct }}</p>
        <p>{{ resultMessage }}</p>

        <div class="flex justify-center">
            <NuxtLink class="bg-accent p-2 text-xl rounded-md  cursor-pointer" to="/quiz" @click="reset()">Go back!
            </NuxtLink>
            <button class="bg-accent p-2 text-xl rounded-md  cursor-pointer" type="button"
                @click="reset()">Restart</button>
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
