import { ObjectId } from 'mongodb';
import { ContentModel } from '../models/content.model';

export interface IExercicePost {
  _id: ObjectId;
  idExercice: ObjectId;
  description: string;
  howToRealise: ContentModel[];
  advice: string[];
}
