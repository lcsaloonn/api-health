import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { IGenericRepository } from 'src/Infrastructure/repository/abstract/generic-repository.abstract';
import { MongoDb } from 'src/Infrastructure/DataBase/db.connection';
import { UserModel } from 'src/Domaine/models/user.model';

@Injectable()
export class UserRepository implements IGenericRepository<UserModel> {
  public connection = MongoDb.instance.db.collection('user');
  async findOne(id: string): Promise<UserModel> {
    return await this.connection.findOne<UserModel>({
      _id: new ObjectId(id),
    });
  }

  async find(options?: any): Promise<UserModel[]> {
    return await this.connection.find<UserModel>(options).toArray();
  }

  update(id: string, item: UserModel) {
    this.connection.updateOne({ _id: new ObjectId(id) }, { $set: item });
  }

  async create(user: UserModel): Promise<void> {
    await this.connection.insertOne(user);
  }
}
