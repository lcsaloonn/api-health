import { Injectable } from '@nestjs/common';
import { ExerciceModel } from 'src/models/exercice.model';
import { ExerciceRepository } from 'src/repository/exercice.repository';

@Injectable()
export class ExerciceService {
  constructor(private readonly _exerciceRepository: ExerciceRepository) {}

  async findAllExercice(): Promise<ExerciceModel[]> {
    return this._exerciceRepository.find();
  }

  async findById(id: string): Promise<ExerciceModel> {
    return this._exerciceRepository.findOne(id);
  }

  async findByBodyPart(bodyPart: string): Promise<ExerciceModel[]> {
    const data = {
      'exercice.bodyPart': bodyPart,
    };
    return this._exerciceRepository.find(data);
  }

  async createExercice(exercice: ExerciceModel): Promise<void> {
    this._exerciceRepository.create(exercice);
  }
}
