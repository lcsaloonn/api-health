import { ObjectId } from 'mongodb';

export class ExerciceModel {
  _id: ObjectId;
  name: string;
  bodyPart: string;
  description: string;
  level: number;

  constructor(
    name: string,
    bodyPart: string,
    description: string,
    level: number,
  ) {
    this._id = new ObjectId();
    this.name = name;
    this.bodyPart = bodyPart;
    this.description = description;
    this.level = level;
  }
}
