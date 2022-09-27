import { Body, Controller, Get, Param, Post, UseFilters } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ExerciceNotFoundException } from 'src/exceptions/exercice.exceptions';
import { HttpExceptionFilter } from 'src/exceptions/filters/httpException.filter';
import { createExerciceDto } from '../Dto/createExercice.dto';
import { ExerciceService } from '../services/exerice.service';
import { CreateExerciceSchema } from '../schema/exercice.schema';
import { IExercice } from 'src/Domaine/Types/exercice.interface';

@Controller('exercices')
@ApiTags('exercices')
export class ExerciceController {
  constructor(private readonly _exerciceService: ExerciceService) {}

  @Get()
  @ApiOkResponse({ description: 'success' })
  async getAllExercices(): Promise<IExercice[]> {
    return this._exerciceService.findAllExercice();
  }

  @UseFilters(HttpExceptionFilter)
  @Get('getByBodyPart/:bodyPart')
  @ApiOkResponse({ description: 'success' })
  async getByBodyPart(
    @Param('bodyPart') bodyPart: string,
  ): Promise<IExercice[]> {
    const exercice = await this._exerciceService.findByBodyPart(bodyPart);
    if (exercice.length) return exercice;
    else throw new ExerciceNotFoundException();
  }

  @Get('getByLevel/:level')
  @ApiOkResponse({ description: 'success' })
  async getByLevel(@Param('level') level: number): Promise<IExercice[]> {
    return this._exerciceService.findByLevel(level);
  }

  @Post()
  @ApiCreatedResponse({ description: 'Exercice created' })
  @ApiBody({ type: CreateExerciceSchema })
  async postExercice(@Body() exercice: createExerciceDto): Promise<void> {
    this._exerciceService.createExercice(exercice);
  }
}
