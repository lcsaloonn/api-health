import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/filters/httpException.filter';
import { CreateExercicePostDTO } from '../Dtos/createExercicePostDTO';
import { CreateExercicePostSchema } from '../schema/CreateExercicePost.schema';
import { ExercicePostService } from '../service/exercicePost.service';

@Controller('exercicePost')
@UseFilters(HttpExceptionFilter)
@ApiTags('exercicePost')
export class ExercicePostController {
  constructor(private readonly _exercicePostService: ExercicePostService) {}

  @Post()
  @ApiCreatedResponse({ description: 'post created' })
  @ApiBody({ type: CreateExercicePostSchema })
  async postExercicePost(@Body() post: CreateExercicePostDTO): Promise<void> {
    this._exercicePostService.createExercicePost(post);
  }
}
