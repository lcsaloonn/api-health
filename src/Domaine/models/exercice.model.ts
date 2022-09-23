import { ObjectId } from 'mongodb';

export enum IBodyPart {
  BACK = 'back',
  LEGS = 'legs',
  SHOULDER = 'shoulder',
  ARMS = 'arms',
  PECS = 'pecs',
}

export class ExerciceModel {
  _id: ObjectId;
  title: string;
  description: string;
  raiting: number;
  bodyPart: IBodyPart;
  imgaeUrl: string;

  constructor(
    title: string,
    description: string,
    raiting: number,
    bodyPart: IBodyPart,
    imgaeUrl: string,
  ) {
    this._id = new ObjectId();
    this.title = title;
    this.description = description;
    this.raiting = raiting;
    this.bodyPart = bodyPart;
    this.imgaeUrl = imgaeUrl;
  }

  private set setRaiting(raiting: number) {
    if (raiting > 5) {
      throw new Error('invalid raiting');
    }
    this.raiting = raiting;
  }
}
