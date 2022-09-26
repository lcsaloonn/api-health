import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { AuthService } from 'src/Application/auth/services/auth/auth.service';

import { UserModel } from 'src/modules/model/user.model';
import { UserRepository } from 'src/Infrastructure/repository/user.repository';
import { CreateUserDto } from '../Dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(private readonly _userRepository: UserRepository) {}

  async findAll(): Promise<UserModel[]> {
    let users: UserModel[] = [];
    users = await this._userRepository.find();

    users.forEach((user) => {
      delete user.password;
    });
    return users;
  }

  async findByUsername(username: string): Promise<UserModel> {
    const data = { username: username };
    return this._userRepository.findOneBy(data);
  }
}
