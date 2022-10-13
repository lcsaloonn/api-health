import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ObjectId } from 'mongodb';
import { UserRole } from 'src/Domaine/Enums/roles.enums';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  generateJWT(id: ObjectId, username: string, role: UserRole): Promise<string> {
    const user = { id, username, role };
    return this.jwtService.signAsync({ user });
  }

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 12);
  }

  comparePasswords(newPassword: string, passwordHash: string): boolean {
    return bcrypt.compare(newPassword, passwordHash);
  }
}
