import { ObjectId } from 'mongodb';

export interface IExercicePost {
  _id: ObjectId;
  idExercice: ObjectId;
  idTitle: string;
  imgUrl: string;
  description: string;
  howToRealise: { id: number; text: string }[];
  advice: string[];
}
