import { ObjectId } from 'mongodb';

export interface IExercicePost {
  _id: ObjectId;
  idExercice: ObjectId;
  description: string;
  howToRealise: string[];
  advice: string[];
}
