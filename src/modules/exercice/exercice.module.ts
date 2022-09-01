import { Module } from '@nestjs/common';
import { ExerciceRepository } from 'src/Infrastructure/repository/exercice.repository';
import { ExerciceController } from './controller/exercice.controller';
import { ExerciceService } from './services/exerice.service';

@Module({
  controllers: [ExerciceController],
  providers: [ExerciceRepository, ExerciceService],
  imports: [],
})
export class ExerciceModule {}
