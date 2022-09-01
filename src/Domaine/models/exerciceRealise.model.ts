import { ObjectId } from 'mongodb';

export class ExerciceRealiseModel {
  _id: ObjectId;
  exercieId: ObjectId;
  repetition: number;
  weight: number;
  numberOfSerie: number;

  constructor(
    exerciceId: ObjectId,
    repetition: number,
    numberOfSerie: number,
    weight?: number,
  ) {
    exerciceId = this.exercieId;
    repetition = this.repetition;
    numberOfSerie = this.numberOfSerie;
    if (weight != null) weight = this.weight;
  }
}
