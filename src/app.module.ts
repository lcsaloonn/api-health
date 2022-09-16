import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { AuthModule } from './Application/auth/auth.module';
import { AllExceptionFilter } from './exceptions/filters/allException.filter';
import { indexModule } from './modules';
import { ExerciceModule } from './modules/exercice/exercice.module';
import { UserModule } from './modules/User/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    indexModule,
    AuthModule,
  ],
  providers: [],
})
export class AppModule {}
