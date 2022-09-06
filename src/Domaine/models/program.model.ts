import { ObjectId } from 'mongodb';

export class ProgramModel {
  _id: ObjectId;
  programName: string;
  exercices: ObjectId[];

  constructor(exercices: ObjectId[], programName: string) {
    this.exercices = exercices;
    this.programName = programName;
  }
}
