import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { AuthService } from 'src/Application/auth/services/auth/auth.service';

import { UserModel } from 'src/Domaine/models/user.model';
import { UserRepository } from 'src/Infrastructure/repository/user.repository';
import { CreateUserDto } from '../Dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly _userRepository: UserRepository,
    private authService: AuthService,
  ) {}

  /** ici rajouter les verifications
   *
   * - pas de doublon de pseudo
   *
   * verifier que username nexiste pas
   */
  async createUser(user: UserModel): Promise<string> {
    if (!this.authService.verifyRegisterData(user)) {
      return 'password or username incorect';
    } else {
      const hashPassword = await this.authService.hashPassword(user.password);
      const newUser = new UserModel(user.username, hashPassword);
      this._userRepository.create(newUser);
      return 'is created';
    }
  }

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

  async login(user: CreateUserDto): Promise<LoginResponse> {
    const isValidate: boolean = await this.ValidateUser(
      user.username,
      user.password,
    );

    if (isValidate) {
      return {
        token: await this.authService.generateJWT(user),
        isSuccess: true,
      };
    } else {
      return {
        isSuccess: false,
      };
    }
  }

  async ValidateUser(username: string, password: string): Promise<boolean> {
    try {
      const userfind: UserModel = await this.findByUsername(username);
      const data = this.authService.comparePasswords(
        password,
        userfind.password,
      );
      return data;
    } catch {
      return false;
    }
  }

  //A refactor!!
  isDuplicationPseudo(username: string): boolean {
    try {
      this.findByUsername(username);
      return true;
    } catch {
      return false;
    }
  }

  async test(user: UserModel) {
    return this.authService.verifyRegisterData(user);
  }
}
