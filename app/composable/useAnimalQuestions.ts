import AnimalQuestions from '~/data/AnimalQuestion';
import { useQuestions } from './useQuestions';

export function useAnimalQuestions() {
  return useQuestions(AnimalQuestions);
}