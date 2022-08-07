import { ObjectId } from 'mongodb';

export class ExerciceModel {
  _id: ObjectId;
  name: string;
  bodyPart: string;

  constructor(name: string, bodyPart: string) {
    this._id = new ObjectId();
    this.name = name;
    this.bodyPart = bodyPart;
  }
}
