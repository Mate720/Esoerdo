import { useQuestions } from './useQuestions';
import { PlantQuestions } from '~/data/PlantQuestions';

export function usePlantQuestions() {
  return useQuestions(PlantQuestions);
}