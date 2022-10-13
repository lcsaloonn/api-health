import { Injectable } from '@nestjs/common';
import { UserModel } from 'src/modules/User/model/user.model';
import { UserRepository } from 'src/Infrastructure/repository/user.repository';
import { UserSecurityService } from './security-services/user-sercurity.service';
import { CreateUserDto } from '../Dto/createUser.dto';
import { LoginUserDTO } from '../Dto/loginUser.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly _userRepository: UserRepository,
    private readonly _userSecurityService: UserSecurityService,
  ) {}

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

  async register(user: CreateUserDto) {
    return this._userSecurityService.createUser(user);
  }

  async login(user: LoginUserDTO) {
    return this._userSecurityService.login(user);
  }
}
