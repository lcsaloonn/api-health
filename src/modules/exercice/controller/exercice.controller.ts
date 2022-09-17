import { Body, Controller, Get, Param, Post, UseFilters } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ExerciceModel } from 'src/Domaine/models/exercice.model';
import { ExerciceNotFoundException } from 'src/exceptions/exercice.exceptions';
import { HttpExceptionFilter } from 'src/exceptions/filters/httpException.filter';
import { createExerciceDto } from '../Dto/createExercice.dto';
import { ExerciceService } from '../services/exerice.service';

@Controller('exercice')
@ApiTags('exercice')
export class ExerciceController {
  constructor(private readonly _exerciceService: ExerciceService) {}

  @Get()
  @ApiOkResponse({ description: 'success' })
  async getAllExercices(): Promise<ExerciceModel[]> {
    return this._exerciceService.findAllExercice();
  }

  @UseFilters(HttpExceptionFilter)
  @Get('getByBodyPart/:bodyPart')
  @ApiOkResponse({ description: 'success' })
  async getByBodyPart(
    @Param('bodyPart') bodyPart: string,
  ): Promise<ExerciceModel[]> {
    const exercice = await this._exerciceService.findByBodyPart(bodyPart);
    if (exercice.length) return exercice;
    else throw new ExerciceNotFoundException();
  }

  @Get('getByLevel/:level')
  @ApiOkResponse({ description: 'success' })
  async getByLevel(@Param('level') level: number): Promise<ExerciceModel[]> {
    return this._exerciceService.findByLevel(level);
  }

  @Post()
  @ApiCreatedResponse({ description: 'Exercice created' })
  @ApiBody({ type: createExerciceDto })
  async postExercice(@Body() exercice: ExerciceModel): Promise<void> {
    this._exerciceService.createExercice(exercice);
  }
}
