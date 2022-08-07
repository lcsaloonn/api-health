import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/Application/auth/auth.service';
import { UserModel } from 'src/Domaine/models/user.model';
import { UserRepository } from 'src/Infrastructure/repository/user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly _userRepository: UserRepository,
    private authService: AuthService,
  ) {}

  async createUser(user: UserModel): Promise<void> {
    const hashPassword = await this.authService.hashPassword(user.password);
    const newUser = new UserModel(user.username, hashPassword, user.email);
    this._userRepository.create(newUser);
  }

  async findAll(): Promise<UserModel[]> {
    let users: UserModel[] = [];
    users = await this._userRepository.find();

    users.forEach((user) => {
      delete user.password;
    });
    console.log(users);
    return users;
  }
}
