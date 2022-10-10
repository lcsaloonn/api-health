import { ObjectID } from 'bson';
import { IUser } from 'src/Domaine/Types/IUser.interface';
import { UserRole } from '../../../Domaine/Enums/roles.enums';

export class UserModel implements IUser {
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
