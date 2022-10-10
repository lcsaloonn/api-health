import { Module } from '@nestjs/common';
import { AuthModule } from 'src/Application/auth/auth.module';
import { UserRepository } from 'src/Infrastructure/repository/user.repository';
import { UserController } from './controllers/user.controller';
import { UserService } from './service/user.service';

@Module({
  controllers: [UserController],
  imports: [AuthModule],
  providers: [UserRepository, UserService],
  exports: [UserService],
})
export class UserModule {}
