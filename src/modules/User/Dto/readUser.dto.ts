import { UserRole } from 'src/Domaine/Enums/roles.enums';

export class ReadUserDto {
  username: string;
  role: UserRole;
}
