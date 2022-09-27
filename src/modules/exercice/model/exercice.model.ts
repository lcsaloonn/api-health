import { ObjectId } from 'mongodb';
import { IExercice } from '../../../Domaine/Types/exercice.interface';

export enum IBodyPart {
  BACK = 'back',
  LEGS = 'legs',
  SHOULDER = 'shoulder',
  ARMS = 'arms',
  PECS = 'pecs',
}

export class ExerciceModel implements IExercice {
  _id: ObjectId;
  title: string;
  description: string;
  raiting: number;
  bodyPart: IBodyPart;
  imageUrl: string;

  constructor(
    title: string,
    description: string,
    raiting: number,
    bodyPart: IBodyPart,
    imageUrl: string,
  ) {
    this._id = new ObjectId();
    this.title = title;
    this.description = description;
    this.raiting = raiting;
    this.bodyPart = bodyPart;
    this.imageUrl = imageUrl;
  }

  private set setRaiting(raiting: number) {
    if (raiting > 5) {
      throw new Error('invalid raiting');
    }
    this.raiting = raiting;
  }
}
