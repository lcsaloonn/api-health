import { ObjectId } from 'mongodb';

export class ExerciceRealiseModel {
  _id: ObjectId;
  exercieId: ObjectId;
  repetition: number;
  weight: number;
  numberOfSerie: number;
  date: Date;

  constructor(
    exerciceId: ObjectId,
    repetition: number,
    numberOfSerie: number,
    weight?: number,
  ) {
    this.exercieId = exerciceId;
    this.repetition = repetition;
    this.numberOfSerie = numberOfSerie;
    if (weight != null) this.weight = weight;
    this.date = new Date();
  }
}
