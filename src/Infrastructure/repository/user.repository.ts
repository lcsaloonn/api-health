import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { IGenericRepository } from 'src/Infrastructure/repository/abstract/generic-repository.abstract';
import { MongoDb } from 'src/Infrastructure/DataBase/db.connection';
import { UserModel } from 'src/modules/User/model/user.model';

@Injectable()
export class UserRepository implements IGenericRepository<UserModel> {
  public connection = MongoDb.instance.db.collection('user');

  async findOne(id: string | ObjectId): Promise<UserModel> {
    return await this.connection.findOne<UserModel>({
      _id: new ObjectId(id),
    });
  }

  // a modifier
  // eslint-disable-next-line @typescript-eslint/ban-types
  async findOneBy(option: Object): Promise<UserModel> {
    return this.connection.findOne<UserModel>(option);
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
