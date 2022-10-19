import { ObjectId } from 'mongodb';
import {
  IExerciceInformation,
  IExerciceRealisation,
} from 'src/Domaine/Types/session.interface';

export class ExerciceRealisation implements IExerciceRealisation {
  exerciceID: ObjectId;
  exerciceName: string;
  exerciceAdvice: string;
  exerciceInformation: IExerciceInformation;

  constructor(
    id: ObjectId,
    name: string,
    advice: string,
    information: IExerciceInformation,
  ) {
    this.exerciceID = id;
    this.exerciceName = name;
    this.exerciceAdvice = advice;
    this.exerciceInformation = information;
  }
}
