import { Injectable } from '@nestjs/common';
import { SortAlgorithm } from 'src/Application/util/algorithms/sortAlgorithm.service';
import { ExerciceModel } from 'src/modules/exercice/model/exercice.model';
import { ExerciceRepository } from 'src/Infrastructure/repository/exercice.repository';
import { createExerciceDto } from '../Dto/createExercice.dto';
import { IExercice } from 'src/Domaine/Types/exercice.interface';

@Injectable()
export class ExerciceService {
  constructor(
    private readonly _exerciceRepository: ExerciceRepository,
    private sortAlgorithm: SortAlgorithm,
  ) {}

  /**
   *  FIND
   */

  async findAllExercice(): Promise<IExercice[]> {
    return this._exerciceRepository.find();
  }

  async findById(id: string): Promise<IExercice> {
    return this._exerciceRepository.findOne(id);
  }

  async findByBodyPart(bodyPart: string): Promise<IExercice[]> {
    const data = {
      bodyPart: bodyPart,
    };
    return this._exerciceRepository.find(data);
  }

  async findByLevel(level: number): Promise<IExercice[]> {
    const data = {
      level: Number(level),
    };
    return this._exerciceRepository.find(data);
  }

  async findByName(title: string): Promise<IExercice[]> {
    const data = {
      title: title,
    };
    return this._exerciceRepository.find(data);
  }

  //find all bodypart (returns all bodyPart envolved in an exercices)

  // A tester
  async findBySort(): Promise<IExercice[]> {
    const exercices = await this._exerciceRepository.find();
    const sorted = this.sortAlgorithm.sortAlphabetical(exercices);
    return sorted;
  }

  /**
   *  Create
   */

  async createExercice(exercice: createExerciceDto): Promise<void> {
    this._exerciceRepository.create(
      new ExerciceModel(
        exercice.title,
        exercice.description,
        exercice.raiting,
        exercice.bodyPart,
        exercice.imageUrl,
      ),
    );
  }
}
