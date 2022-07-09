import { Injectable } from '@nestjs/common';
import { Exercice } from 'src/models/exercice.model';
import { CreateExerciceInput } from './dto/input/create-exercice.input';
import { v4 as uuidv4 } from 'uuid';
import { GetExerciceArgs } from './dto/args/get-exercice.args';
import { GetExercicesArgs } from './dto/args/get-exercices.args';

@Injectable()
export class ExerciceService {
  private exercices: Exercice[] = [];

  public createExercice(createExerciceData: CreateExerciceInput): Exercice {
    const exercice: Exercice = {
      exerciceId: uuidv4(),
      ...createExerciceData,
    };
    this.exercices.push(exercice);
    return exercice;
  }

  //public updateExercice(): Exercice {}

  public getExercice(getExerciceArgs: GetExerciceArgs): Exercice {
    return this.exercices.find(
      (exercice) => exercice.exerciceId === getExerciceArgs.exerciceId,
    );
  }

  public getExercices(getExercicesArgs: GetExercicesArgs): Exercice[] {
    return getExercicesArgs.exerciceIds.map((exerciceId) =>
      this.getExercice({ exerciceId }),
    );
  }
}
