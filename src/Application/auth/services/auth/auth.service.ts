import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserModel } from 'src/Domaine/models/user.model';
import { CreateUserDto } from 'src/modules/User/Dto/createUser.dto';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  generateJWT(user: CreateUserDto): Promise<string> {
    return this.jwtService.signAsync({ user });
  }

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 12);
  }

  comparePasswords(newPassword: string, passwordHash: string): boolean {
    return bcrypt.compare(newPassword, passwordHash);
  }

  verifyRegisterData(userData: UserModel): boolean {
    const passwordRegex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
    );
    const userNameRegex = new RegExp('^[a-zA-Z0-9]+$');
    if (
      userData.password.match(passwordRegex) &&
      userData.username.match(userNameRegex)
    ) {
      return true;
    } else {
      return false;
    }
  }
}
