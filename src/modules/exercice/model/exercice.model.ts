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

  set setRaiting(raiting: number) {
    if (raiting > 5) {
      throw new Error('invalid raiting');
    }
    this.raiting = raiting;
  }

  set setBodyPart(bodyPart: IBodyPart) {
    if (Object.values(IBodyPart).includes(bodyPart)) {
      throw new Error('invalid body part');
    } else {
      this.bodyPart = bodyPart;
    }
  }
}
