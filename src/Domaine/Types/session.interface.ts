import { ObjectId } from 'mongodb';
import { BodyPartEnum } from '../Enums/bodyPart.enum';

export interface ISessionExercice {
  id: ObjectId;
  name: string;
  bodyParts: BodyPartEnum[];
  img: string;
  time: string;
  difficulty: number;
  exercices: IExerciceRealisation[];
}

export interface IExerciceRealisation {
  exerciceID: ObjectId;
  exerciceName: string;
  exerciceAdvice: string;
  exerciceInformation: IExerciceInformation;
}

export interface IExerciceInformation {
  level: string;
  recovery: number;
  sets: number;
  repetition: number;
  weight: {
    number: number;
    unit: string;
  };
}
