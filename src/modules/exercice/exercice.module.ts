import { Module } from '@nestjs/common';
import { SortAlgorithm } from 'src/Application/util/algorithms/sortAlgorithm.service';
import { ExerciceRepository } from 'src/Infrastructure/repository/exercice.repository';
import { DataExistRule } from 'src/Pipes/custom-validator/isDataExist.pipe';
import { ExerciceController } from './controller/exercice.controller';
import { ExerciceService } from './services/exerice.service';

@Module({
  controllers: [ExerciceController],
  providers: [
    ExerciceRepository,
    ExerciceService,
    SortAlgorithm,
    DataExistRule,
  ],
  imports: [],
})
export class ExerciceModule {}
