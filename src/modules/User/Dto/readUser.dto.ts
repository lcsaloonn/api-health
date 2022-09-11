import { ObjectId } from 'mongodb';
import { UserRole } from 'src/Domaine/Enums/roles.enums';

export class ReadUserDto {
  _id: ObjectId;
  username: string;
  role: UserRole;
}
