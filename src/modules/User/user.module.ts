import { Module } from '@nestjs/common';
import { AuthModule } from 'src/Application/auth/auth.module';
import { AuthService } from 'src/Application/auth/services/auth/auth.service';
import { UserRepository } from 'src/Infrastructure/repository/user.repository';
import { isRegex, IsRegexPipe } from 'src/Pipes/isRegex.pipe';
import { UserExistsPipe } from 'src/Pipes/user/isUserExist.pipe';
import { UserController } from './controllers/user.controller';
import { UserService } from './service/user.service';

@Module({
  controllers: [UserController],
  imports: [AuthModule],
  providers: [UserRepository, UserService, UserExistsPipe, IsRegexPipe],
  exports: [UserService],
})
export class UserModule {}
