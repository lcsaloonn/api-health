import { Module } from '@nestjs/common';
import { ExerciceRepository } from 'src/Infrastructure/repository/exercice.repository';
import { ExercicePostRepository } from 'src/Infrastructure/repository/exercicePost.repository';
import { ExerciceExistRule } from 'src/Pipes/custom-validator/isExerciceIdExist.pipe';
import { ExercicePostController } from './controller/exericePost.controller';
import { ExercicePostService } from './service/exercicePost.service';

@Module({
  controllers: [ExercicePostController],
  providers: [
    ExercicePostRepository,
    ExercicePostService,
    ExerciceRepository,
    ExerciceExistRule,
  ],
  imports: [],
})
export class ExercicePostModule {}
