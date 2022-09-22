import { Module } from '@nestjs/common';
import { SortAlgorithm } from 'src/Application/util/algorithms/sortAlgorithm.service';
import { ExerciceRepository } from 'src/Infrastructure/repository/exercice.repository';
import { ExerciceController } from './controller/exercice.controller';
import { ExerciceService } from './services/exerice.service';

@Module({
  controllers: [ExerciceController],
  providers: [ExerciceRepository, ExerciceService, SortAlgorithm],
  imports: [],
})
export class ExerciceModule {}
