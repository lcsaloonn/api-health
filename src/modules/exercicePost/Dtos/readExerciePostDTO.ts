import { ObjectId } from 'mongodb';

export class ReadExercicePostDTO {
  _id: ObjectId;
  idExercice: ObjectId;
  idTitle: string;
  imgUrl: string;
  description: string;
  howToRealise: { id: number; text: string }[];
  advice: string[];
}
