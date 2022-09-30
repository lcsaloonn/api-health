import { ObjectId } from 'mongodb';

export type ByStepText = {
  stepNumber: number;
  text: string;
};

export interface IExercicePost {
  _id: ObjectId;
  idExercice: ObjectId;
  description: string;
  howToRealise: ByStepText[];
  advice: string[];
}
