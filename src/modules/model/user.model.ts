import { ObjectID } from 'bson';
import { UserRole } from '../../Domaine/Enums/roles.enums';

export class UserModel {
  _id: ObjectID;
  username: string;
  password: string;
  role: UserRole;

  constructor(username: string, password: string) {
    this._id = new ObjectID();
    this.username = username;
    this.password = password;
    this.role = UserRole.USER;
  }
}
