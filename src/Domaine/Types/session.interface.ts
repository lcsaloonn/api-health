import { BodyPartEnum } from '../Enums/bodyPart.enum';

export interface ISession {
  id: string;
  name: string;
  bodyParts: BodyPartEnum;
  img: string;
  time: Date;
  difficulty: number;
  exercices: IExerciceRealisation[];
}

interface IExerciceRealisation {
  exerciceID: string;
  exerciceName: string;
  exerciceAdvice: string;
  exerciceDifficulty: IExerciceDifficultyType;
}

interface IExerciceDifficultyType {
  level: string;
  recovery: number;
  sets: number;
  repetition: number;
  weight: string;
}
