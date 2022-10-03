import { ObjectId } from 'mongodb';
import { ContentModel } from 'src/Domaine/models/content.model';

export class ReadExercicePostDTO {
  _id: ObjectId;
  idExercice: ObjectId;
  idTitle: string;
  imgUrl: string;
  description: string;
  howToRealise: ContentModel[];
  advice: string[];
}
