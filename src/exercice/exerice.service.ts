import { Injectable } from '@nestjs/common';
import { ExerciceModel } from 'src/models/exercice.model';
import { ExerciceRepository } from 'src/repository/exercice.repository';

@Injectable()
export class ExerciceService {
  constructor(private readonly _exerciceRepository: ExerciceRepository) {}

  async getAllExercice(): Promise<ExerciceModel[]> {
    return this._exerciceRepository.getAll();
  }

  async createExercice(exercice: ExerciceModel): Promise<void> {
    this._exerciceRepository.create(exercice);
  }
}
