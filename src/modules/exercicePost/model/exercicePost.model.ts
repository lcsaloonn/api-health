import { ObjectId } from 'mongodb';
import { IExercicePost } from 'src/Domaine/Types/IExercicePost.interface';

export class ExercicePostModel implements IExercicePost {
  _id: ObjectId;
  idExercice: ObjectId;
  idTitle: string;
  imgUrl: string;
  description: string;
  howToRealise: { id: number; text: string }[];
  advice: string[];

  constructor(
    idExercice: string,
    idTitle: string,
    description: string,
    howToRealise: { id: number; text: string }[],
    advice: string[],
    imgUrl: string,
  ) {
    this._id = new ObjectId();
    this.idExercice = new ObjectId(idExercice);
    this.idTitle = idTitle;
    this.description = description;
    this.howToRealise = howToRealise;
    this.advice = advice;
    this.imgUrl = imgUrl;
  }
}
