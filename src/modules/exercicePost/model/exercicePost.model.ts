import { ObjectId } from 'mongodb';
import { ContentModel } from 'src/Domaine/models/content.model';
import { IExercicePost } from 'src/Domaine/Types/IExercicePost.interface';

export class ExercicePostModel implements IExercicePost {
  _id: ObjectId;
  idExercice: ObjectId;
  description: string;
  howToRealise: ContentModel[];
  advice: string[];

  constructor(
    idExercice: string,
    description: string,
    howToRealise: ContentModel[],
    advice: string[],
  ) {
    this._id = new ObjectId();
    this.idExercice = new ObjectId(idExercice);
    this.description = description;
    this.howToRealise = howToRealise;
    this.advice = advice;
  }
}