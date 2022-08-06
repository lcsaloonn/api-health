import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { IGenericRepository } from 'src/core/abstract/generic-repository.abstract';
import { MongoDb } from 'src/DataBase/db.connection';
import { createExerciceDto } from 'src/exercice/Dto/createExercice.dto';
import { ExerciceModel } from 'src/models/exercice.model';

@Injectable()
export class ExerciceRepository implements IGenericRepository<ExerciceModel> {
  async findOne(id: string): Promise<ExerciceModel> {
    return await this.connection.findOne<ExerciceModel>({
      _id: new ObjectId(id),
    });
  }

  async find(options?: any): Promise<ExerciceModel[]> {
    return await this.connection.find<ExerciceModel>(options).toArray();
  }

  update(id: string, item: createExerciceDto) {
    this.connection.updateOne({ _id: new ObjectId(id) }, { $set: item });
  }
  public connection = MongoDb.instance.db.collection('exercice');

  async create(exercice: ExerciceModel): Promise<void> {
    await this.connection.insertOne({ exercice });
  }
}
