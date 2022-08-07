import { ObjectID } from 'bson';

export class UserModel {
  _id: ObjectID;
  username: string;
  password: string;

  /**
   *
   */
  constructor(username: string, password: string) {
    this._id = new ObjectID();
    this.username = username;
    this.password = password;
  }
}
