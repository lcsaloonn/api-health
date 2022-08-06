import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { ExerciceModel } from 'src/models/exercice.model';
import { createExerciceDto } from './Dto/createExercice.dto';
import { ExerciceService } from './exerice.service';

@Controller('exercice')
@ApiTags('exercice')
export class ExerciceController {
  constructor(private readonly _exerciceService: ExerciceService) {}
  @Get()
  @ApiOkResponse({ description: 'success' })
  async getAllExercice(): Promise<ExerciceModel[]> {
    return this._exerciceService.findAllExercice();
  }

  @Get('getBodyPart/:bodyPart')
  @ApiOkResponse({ description: 'success' })
  async getByBodyPart(
    @Param('bodyPart') bodyPart: string,
  ): Promise<ExerciceModel[]> {
    return this._exerciceService.findByBodyPart(bodyPart);
  }

  @Post()
  @ApiCreatedResponse({ description: 'Exercice created' })
  @ApiBody({ type: createExerciceDto })
  async postExercice(@Body() exercice: ExerciceModel): Promise<void> {
    this._exerciceService.createExercice(exercice);
  }
}
