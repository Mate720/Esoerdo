import { useToast } from "primevue/usetoast";
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";

export function useQuestions(questionsData: any[]) {
  const route = useRoute();
  const router = useRouter();
  const toast = useToast();
  const questions = ref(questionsData);
  const askedQuestions = ref<number[]>([]);
  const actual = ref(Math.floor(Math.random() * questions.value.length));
  const next = ref(0);
  const correct = ref(0);
  const selectedIndex = ref(-1);

  const confirmDialogVisible = ref(false);  
  let confirmResolve: ((value: boolean) => void) | null = null; 

 
  const showConfirmDialog = (): Promise<boolean> => {
    confirmDialogVisible.value = true;  
    return new Promise((resolve) => {
      confirmResolve = resolve;        
    });
  };


  const generateNextQuestion = () => {
    if (askedQuestions.value.length >= questions.value.length) {
      return;
    }
    let newValue;
    do {
      newValue = Math.floor(Math.random() * questions.value.length);
    } while (askedQuestions.value.includes(newValue));
    actual.value = newValue;
    askedQuestions.value.push(newValue);
  };

  const checkAnswer = () => {
    if (selectedIndex.value === -1) {
      toast.add({
        severity: "warn",
        summary: "Warn Message",
        detail: "Please choose an option!",
        group: "br",
        life: 1500,
      });
    } else if (
      selectedIndex.value === questions.value[actual.value]?.correctIndex
    ) {
      next.value++;
      correct.value++;
      toast.add({
        severity: "success",
        summary: "Correct!",
        group: "br",
        life: 1500,
      });
      selectedIndex.value = -1;
      generateNextQuestion();
    } else {
      toast.add({
        severity: "error",
        summary: "Incorrect answer!",
        group: "br",
        life: 1500,
      });
      next.value++;
      selectedIndex.value = -1;
      generateNextQuestion();
    }
  };

  const onSelect = (index: number) => {
    selectedIndex.value = index;
  };

  const reset = () => {
    next.value = actual.value = correct.value = 0;
    selectedIndex.value = -1;
    askedQuestions.value = [];
    generateNextQuestion();
  };

  const confirmDialogAnswer = (answer: boolean) => {
    confirmDialogVisible.value = false; 
    if (confirmResolve) {
      confirmResolve(answer);             
      confirmResolve = null;
    }
  };

  const quit = async () => {
    const confirmed = await showConfirmDialog();
    if (confirmed) {
      next.value = actual.value = correct.value = 0;
      selectedIndex.value = -1;
      askedQuestions.value = [];
      generateNextQuestion();
      await router.push('/quiz'); 
    }
  };

  watch(
    () => route.fullPath,
    () => {
      actual.value = correct.value = 0;
      selectedIndex.value = -1;
    }
  );

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
    10: "Excellent! Perfect score!",
  };

  const resultMessage = computed(() => {
    return messages[correct.value];
  });

  return {
    questions,
    askedQuestions,
    actual,
    next,
    correct,
    selectedIndex,
    resultMessage,
    generateNextQuestion,
    checkAnswer,
    onSelect,
    reset,
    confirmDialogVisible,
    confirmDialogAnswer,
    quit,
  };
}
