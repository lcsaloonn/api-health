import { Module } from '@nestjs/common';
import { ExerciceRepository } from 'src/repository/exercice.repository';
import { ExerciceController } from './exercice.controller';
import { ExerciceService } from './exerice.service';

@Module({
  controllers: [ExerciceController],
  providers: [ExerciceRepository, ExerciceService],
  imports: [],
})
export class ExerciceModule {}
