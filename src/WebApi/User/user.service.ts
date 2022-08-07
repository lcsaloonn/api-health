import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { AuthService } from 'src/Application/auth/auth.service';
import { UserModel } from 'src/Domaine/models/user.model';
import { UserRepository } from 'src/Infrastructure/repository/user.repository';
import { CreateUserDto } from './Dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly _userRepository: UserRepository,
    private authService: AuthService,
  ) {}

  /** ici rajouter les verifications
   * - mot de passe corect regex
   * - pas de doublon de pseudo
   */
  async createUser(user: UserModel): Promise<void> {
    const hashPassword = await this.authService.hashPassword(user.password);
    const newUser = new UserModel(user.username, hashPassword);
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

  async findByUsername(username: string): Promise<UserModel> {
    const data = { username: username };
    return this._userRepository.findOneBy(data);
  }

  //rempalcer type promesse
  async login(user: CreateUserDto): Promise<any> {
    const isValidate = await this.ValidateUser(user.username, user.password);
    //crée un type
    const data = {
      token: '' || null,
      isSuccess: false,
    };
    if (isValidate) {
      data.token = await this.authService.generateJWT(user);
      data.isSuccess = true;
    } else {
      data.isSuccess = false;
    }
    return data;
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
}
