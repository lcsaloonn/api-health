import { Module } from '@nestjs/common';
import { AuthModule } from 'src/Application/auth/auth.module';
import { UserRepository } from 'src/Infrastructure/repository/user.repository';
import { UserExistsPipe } from 'src/Pipes/user/isUserExist.pipe';
import { UserController } from './controllers/user.controller';
import { UserService } from './service/user.service';

@Module({
  controllers: [UserController],
  imports: [AuthModule],
  providers: [UserRepository, UserService, UserExistsPipe],
  exports: [UserService],
})
export class UserModule {}
