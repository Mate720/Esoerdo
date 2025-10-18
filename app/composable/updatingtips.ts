import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useToast } from '#imports';
import RainforestSustainabilityTips from '~/data/Tips';

export function useUpdatingTips() {
  const toast = useToast();
  const tips = ref(RainforestSustainabilityTips as { title: string; description: string }[]);
  let intervalId: ReturnType<typeof setInterval> | null = null;

  const showRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * tips.value.length);
    const tip = tips.value[randomIndex];
    toast.add({
      summary: "Tip: " + tip!.title,
      detail: tip!.description,
      severity: 'info',
      life: 4000,
      group: 'bl',
    });
  };

  onMounted(() => {
    intervalId = setInterval(() => {
      showRandomTip();
    }, 40000);
  });

  onBeforeUnmount(() => {
    if (intervalId) clearInterval(intervalId);
    toast.removeAllGroups();
  });
}
