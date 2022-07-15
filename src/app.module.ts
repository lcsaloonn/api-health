import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExerciceModule } from './exercice/exercice.module';

@Module({
  imports: [ConfigModule.forRoot({ envFilePath: '.env' }), ExerciceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
