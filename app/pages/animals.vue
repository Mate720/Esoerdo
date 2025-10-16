<script setup lang="ts">
import { computed } from 'vue';
import { ref, reactive } from 'vue';
import RadioButton from 'primevue/radiobutton';
import RadioButtonGroup from 'primevue/radiobuttongroup';
import AnimalQuestions from '~/data/AnimalQuestion';
import Toast from 'primevue/toast';

const route = useRoute();



const actual = ref(0);
const correct = ref(0);
const selectedIndex = ref(-1);
const toast = useToast();


const checkAnswer = () => {
    console.log(selectedIndex.value);
    if (selectedIndex.value === -1) {
        toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Please choose an option!', group: 'br', life: 1500 });
    }
    else if (selectedIndex.value === AnimalQuestions[actual.value]?.correctIndex) {
        correct.value++;
        toast.add({ severity: 'success', summary: 'Correct!', group: 'br', life: 1500 });
        actual.value++;
        selectedIndex.value = -1;
    } else {
        toast.add({ severity: 'error', summary: 'Incorrect answer!', group: 'br', life: 1500 });
        actual.value++;
        selectedIndex.value = -1;
    }
}

const onSelect = (index: number) => {
    selectedIndex.value = index;
    console.log(selectedIndex);
}

const reset = () => {
    actual.value = correct.value = 0;
    selectedIndex.value = -1;
    console.log(actual.value);
}

watch(
    () => route.fullPath,
    () => {
        actual.value = correct.value = 0;
        selectedIndex.value = -1;
    }
)


const messages: Record<number, string> = {
    0: "Don't give up, keep practicing!",
    1: "Keep trying, you'll get better!",
    2: "Not bad, but there is room for improvement.",
    3: "You did okay!",
    4: "Good job, you're improving!",
    5: "Well done! Keep it up!",
    6: "Great work!",
    7: "Awesome! Almost there!",
    8: "Excellent!",
    9: "Almost perfect!",
    10: "Excellent! Perfect score!"
};

const resultMessage = computed(() => {
    return messages[correct.value];
});

</script>

<template>
    <section>
        <Toast position="bottom-right" group="br" />
        <h1>Quiz</h1>
        <p>Ez az Animals quiz oldal.</p>
    </section>
    <section v-if="actual < 10">
        <h1>HELYES VÁLASZOK: 10 / {{ correct }}</h1>
        <h3>{{ AnimalQuestions[actual]?.question }}</h3>

        <div>
            <div>
                <RadioButtonGroup class="flex flex-col">
                    <div v-for="(choice, index) in AnimalQuestions[actual]?.answers">
                        <RadioButton :value="choice" @change="() => onSelect(index)" />
                        <label>{{ choice }}</label>
                    </div>
                </RadioButtonGroup>
            </div>
            <button class="bg-accent p-2 text-xl rounded-md cursor-pointer" type="button" @click="checkAnswer()">Check
                answer</button>

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
