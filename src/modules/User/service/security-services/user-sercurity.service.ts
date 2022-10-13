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

  async createUser(user: CreateUserDto): Promise<LoginResponse> {
    const hashPassword = await this.authService.hashPassword(user.password);
    const newUser = new UserModel(user.username, hashPassword);
    this._userRepository.create(newUser);
    return { isSuccess: true };
  }

  async findById(userId: string | ObjectId): Promise<UserModel> {
    return this._userRepository.findOne(userId);
  }

  async findByUsername(username: string): Promise<UserModel> {
    const data = { username: username };
    return this._userRepository.findOneBy(data);
  }

  async login(user: CreateUserDto): Promise<LoginResponse> {
    const {
      isGoodPassword,
      userfind,
    }: { isGoodPassword: boolean; userfind: UserModel } =
      await this.ValidateUser(user.username, user.password);

    if (isGoodPassword) {
      return {
        token: await this.authService.generateJWT(
          userfind._id,
          userfind.username,
          userfind.role,
        ),
        isSuccess: true,
      };
    } else {
      return {
        isSuccess: false,
      };
    }
  }

  async ValidateUser(username: string, password: string) {
    try {
      const userfind: UserModel = await this.findByUsername(username);
      const isGoodPassword = await this.authService.comparePasswords(
        password,
        userfind.password,
      );
      return { isGoodPassword, userfind };
    } catch (e) {
      throw Error(e);
    }
  }
}
