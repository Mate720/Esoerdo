import { useQuestions } from './useQuestions';
import { PlantQuestions } from '~/data/PlantQuestions';
import AnimalQuestions from '~/data/AnimalQuestion';

const combinedQuestions = [...AnimalQuestions, ...PlantQuestions];
export function useEveryQuestions(){
    return useQuestions(combinedQuestions);
}