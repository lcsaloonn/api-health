import { IExerciceInformation } from 'src/Domaine/Types/session.interface';

export class ExerciceInformation implements IExerciceInformation {
  level: string;
  recovery: number;
  sets: number;
  repetition: number;
  weight: {
    number: number;
    unit: string;
  };

  constructor(
    level: string,
    recovery: number,
    sets: number,
    repetition: number,
    weight: {
      number: number;
      unit: string;
    },
  ) {
    this.level = level;
    this.recovery = recovery;
    this.sets = sets;
    this.repetition = repetition;
    this.weight = weight;
  }
}
