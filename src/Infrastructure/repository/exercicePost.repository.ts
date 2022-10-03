import { Injectable } from '@nestjs/common';
import { IExercicePost } from 'src/Domaine/Types/IExercicePost.interface';
import { MongoDb } from '../DataBase/db.connection';
import { IGenericRepository } from './abstract/generic-repository.abstract';

@Injectable()
export class ExercicePostRepository
  implements IGenericRepository<IExercicePost>
{
  public connection = MongoDb.instance.db.collection('exercicePosts');

  find(options: any): Promise<IExercicePost[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<IExercicePost> {
    throw new Error('Method not implemented.');
  }

  async findOneByData(key: string | number, data: any): Promise<IExercicePost> {
    return await this.connection.findOne<IExercicePost>({ [key]: data });
  }

  async create(post: IExercicePost): Promise<void> {
    await this.connection.insertOne(post);
  }
  update(id: string, item: IExercicePost) {
    throw new Error('Method not implemented.');
  }
}
