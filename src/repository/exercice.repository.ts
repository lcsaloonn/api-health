import { Injectable } from '@nestjs/common';
import { IGenericRepository } from 'src/core/abstract/generic-repository.abstract';
import { MongoDb } from 'src/DataBase/db.connection';
import { ExerciceModel } from 'src/models/exercice.model';

@Injectable()
export class ExerciceRepository implements IGenericRepository<ExerciceModel> {
  get(): Promise<ExerciceModel> {
    throw new Error('Method not implemented.');
  }

  update(id: string, item: ExerciceModel) {
    throw new Error('Method not implemented.');
  }
  public connection = MongoDb.instance.db.collection('exercice');

  async getAll(): Promise<ExerciceModel[]> {
    return await this.connection
      .find<ExerciceModel>({ trash: { $ne: true } })
      .toArray();
  }

  async create(exercice: ExerciceModel): Promise<void> {
    await this.connection.insertOne({ exercice });
  }
}
