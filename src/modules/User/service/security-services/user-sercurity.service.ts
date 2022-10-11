import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { UserModel } from 'src/modules/User/model/user.model';
import { UserRepository } from 'src/Infrastructure/repository/user.repository';
import { CreateUserDto } from 'src/modules/User/Dto/createUser.dto';
import { AuthService } from '../../../../Application/auth/services/auth/auth.service';
import { LoginResponse } from 'src/Domaine/Types/userType/userType';

@Injectable()
export class UserSecurityService {
  constructor(
    private readonly _userRepository: UserRepository,
    private authService: AuthService,
  ) {}

  /**
   * Ameliorations
   *  -move fonction verifyRegisterData
   */
  async createUser(user: CreateUserDto): Promise<void> {
    const hashPassword = await this.authService.hashPassword(user.password);
    const newUser = new UserModel(user.username, hashPassword);
    this._userRepository.create(newUser);
  }

  async findById(userId: string | ObjectId): Promise<UserModel> {
    return this._userRepository.findOne(userId);
  }

  async findByUsername(username: string): Promise<UserModel> {
    const data = { username: username };
    return this._userRepository.findOneBy(data);
  }

  /**
   *
   * A refactor logique
   * 2x appel method userfind
   * creation d'un type inutile
   */
  async login(user: CreateUserDto): Promise<LoginResponse> {
    const isValidate: boolean = await this.ValidateUser(
      user.username,
      user.password,
    );

    if (isValidate) {
      const userfind: UserModel = await this.findByUsername(user.username);
      const readUser = {
        _id: userfind._id,
        username: userfind.username,
        role: userfind.role,
      };
      return {
        token: await this.authService.generateJWT(readUser),
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
      const isGoodPassword = this.authService.comparePasswords(
        password,
        userfind.password,
      );
      return isGoodPassword;
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
