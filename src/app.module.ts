import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './Application/auth/auth.module';
import { indexModule } from './modules';
import { ExerciceModule } from './modules/exercice/exercice.module';
import { UserModule } from './modules/User/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    indexModule,
    AuthModule,
  ],
})
export class AppModule {}
