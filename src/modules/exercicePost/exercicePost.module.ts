import { Module } from '@nestjs/common';
import { ExercicePostRepository } from 'src/Infrastructure/repository/exercicePost.repository';
import { ExercicePostController } from './controller/exericePost.controller';
import { ExercicePostService } from './service/exercicePost.service';

@Module({
  controllers: [ExercicePostController],
  providers: [ExercicePostRepository, ExercicePostService],
  imports: [],
})
export class ExercicePostModule {}
