import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './Application/auth/auth.module';
import { indexModule } from './modules';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    indexModule,
    AuthModule,
  ],
  providers: [],
})
export class AppModule {}
