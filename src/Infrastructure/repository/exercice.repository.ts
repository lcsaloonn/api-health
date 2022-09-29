import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { IGenericRepository } from 'src/Infrastructure/repository/abstract/generic-repository.abstract';
import { MongoDb } from 'src/Infrastructure/DataBase/db.connection';
import { createExerciceDto } from 'src/modules/exercice/Dto/createExercice.dto';
import { IExercice } from 'src/Domaine/Types/exercice.interface';

@Injectable()
export class ExerciceRepository implements IGenericRepository<IExercice> {
  public connection = MongoDb.instance.db.collection('exercice');
  async findOne(id: string): Promise<IExercice> {
    return await this.connection.findOne<IExercice>({
      _id: new ObjectId(id),
    });
  }

  async find(options?: any): Promise<IExercice[]> {
    return await this.connection.find<IExercice>(options).toArray();
  }

  update(id: string, item: createExerciceDto) {
    this.connection.updateOne({ _id: new ObjectId(id) }, { $set: item });
  }

  async create(exercice: IExercice): Promise<void> {
    await this.connection.insertOne(exercice);
  }
}
