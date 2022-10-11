import { ObjectId } from 'mongodb';
import { UserRole } from '../Enums/roles.enums';

export interface IUser {
  _id: ObjectId;
  username: string;
  password: string;
  role: UserRole;
}
