import { Module, forwardRef } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/modules/User/user.module';
import { UserService } from 'src/modules/User/user.service';

import { AuthService } from './services/auth/auth.service';
import { JwtStrategy } from './Guards/jwt-strategy';
import { JwtAuthGuard } from './Guards/jwt.guard';
import { RolesGuard } from './Guards/roles.guard';
import { UserSecurityService } from './services/security-services/user-sercurity.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: '10000s' },
      }),
    }),
  ],
  providers: [AuthService, JwtAuthGuard],
  // RolesGuard, JwtAuthGuard, JwtStrategy
  exports: [AuthService],
})
export class AuthModule {}
