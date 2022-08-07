import { Module } from '@nestjs/common';
import { AuthModule } from 'src/Application/auth/auth.module';
import { UserRepository } from 'src/Infrastructure/repository/user.repository';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  imports: [AuthModule],
  providers: [UserRepository, UserService],
})
export class UserModule {}
