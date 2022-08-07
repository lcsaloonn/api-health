import { ObjectID } from 'bson';

export class UserModel {
  _id: ObjectID;
  username: string;
  password: string;
  email: string;

  /**
   *
   */
  constructor(username: string, password: string, email?: string) {
    this._id = new ObjectID();
    this.username = username;
    this.password = password;
    this.email = email;
  }
}
