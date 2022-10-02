import { ObjectId } from 'mongodb';
import { IBodyPart } from '../../modules/exercice/model/exercice.model';

export interface IExercice {
  _id?: ObjectId;
  title: string;
  idTitle: string;
  description: string;
  raiting: number;
  bodyPart: IBodyPart;
  imageUrl: string;
}
