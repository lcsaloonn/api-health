import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { UserRole } from 'src/Domaine/Enums/roles.enums';
import { UserModel } from 'src/Domaine/models/user.model';
import { UserRepository } from 'src/Infrastructure/repository/user.repository';
import { CreateUserDto } from 'src/modules/User/Dto/createUser.dto';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UserSecurityService {
  constructor(
    private readonly _userRepository: UserRepository,
    private authService: AuthService,
  ) {}

  /**
   * Ameliorations
   *  -move fonction verifyRegisterData
   *  - better error response
   *  - gestion des cas dans le if à opti
   */
  async createUser(user: UserModel): Promise<string> {
    const userfind: UserModel = await this.findByUsername(user.username);
    if (!this.authService.verifyRegisterData(user)) {
      return 'password or username incorect';
    } else if (userfind != null) {
      return 'username incorect';
    } else {
      const hashPassword = await this.authService.hashPassword(user.password);
      const newUser = new UserModel(user.username, hashPassword, UserRole.USER);
      this._userRepository.create(newUser);
      return 'is created';
    }
  }

  async findById(userId: string | ObjectId): Promise<UserModel> {
    return this._userRepository.findOne(userId);
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

  isDuplicationPseudo(username: string): boolean {
    try {
      this.findByUsername(username);
      return true;
    } catch {
      return false;
    }
  }
}
