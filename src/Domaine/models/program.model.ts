import { ObjectId } from 'mongodb';

export class ProgramModel {
  _id: ObjectId;
  exercices: ObjectId[];

  constructor(exercices: ObjectId[]) {
    exercices = this.exercices;
  }
}
