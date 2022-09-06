import { ObjectId } from 'mongodb';
import { ExerciceRealiseModel } from './exerciceRealise.model';

export class userProgramRealise {
  id: ObjectId;
  idUser: ObjectId;
  idProgram: ObjectId;
  exerciceRealise: ObjectId[];
  date: Date;
}
