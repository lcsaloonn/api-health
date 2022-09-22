import { Injectable } from '@nestjs/common';
import { SortAlgorithm } from 'src/Application/util/algorithms/sortAlgorithm.service';
import { ExerciceModel } from 'src/Domaine/models/exercice.model';
import { ExerciceRepository } from 'src/Infrastructure/repository/exercice.repository';

@Injectable()
export class ExerciceService {
  constructor(
    private readonly _exerciceRepository: ExerciceRepository,
    private sortAlgorithm: SortAlgorithm,
  ) {}

  async findAllExercice(): Promise<ExerciceModel[]> {
    return this._exerciceRepository.find();
  }

  async findById(id: string): Promise<ExerciceModel> {
    return this._exerciceRepository.findOne(id);
  }

  async findByBodyPart(bodyPart: string): Promise<ExerciceModel[]> {
    const data = {
      bodyPart: bodyPart,
    };
    return this._exerciceRepository.find(data);
  }

  async findByLevel(level: number): Promise<ExerciceModel[]> {
    const data = {
      level: Number(level),
    };
    return this._exerciceRepository.find(data);
  }

  async createExercice(exercice: ExerciceModel): Promise<void> {
    this._exerciceRepository.create(
      new ExerciceModel(
        exercice.name,
        exercice.bodyPart,
        exercice.description,
        exercice.level,
      ),
    );
  }

  async findBySort(): Promise<ExerciceModel[]> {
    const exercices = await this._exerciceRepository.find();
    const n = this.sortAlgorithm.sortAlphabetical(exercices);
    return exercices;
  }
}
