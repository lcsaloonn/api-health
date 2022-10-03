import { Body, Controller, Get, Param, Post, UseFilters } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { NotFoundException } from 'src/exceptions/notFound.exceptions';
import { HttpExceptionFilter } from 'src/filters/httpException.filter';
import { createExerciceDto } from '../Dto/createExercice.dto';
import { ExerciceService } from '../services/exerice.service';
import { CreateExerciceSchema } from '../schema/exercice.schema';
import { IExercice } from 'src/Domaine/Types/exercice.interface';

@Controller('exercices')
@UseFilters(HttpExceptionFilter)
@ApiTags('exercices')
export class ExerciceController {
  constructor(private readonly _exerciceService: ExerciceService) {}

  @Get()
  @ApiOkResponse({ description: 'success' })
  async getAllExercices(): Promise<IExercice[]> {
    return this._exerciceService.findAllExercice();
  }

  @Get('getById/:id')
  @ApiOkResponse({ description: 'success' })
  async getById(@Param('id') id: string): Promise<IExercice> {
    return await this._exerciceService.findById(id);
  }

  @Get('getByBodyPart/:bodyPart')
  @ApiOkResponse({ description: 'success' })
  async getByBodyPart(
    @Param('bodyPart') bodyPart: string,
  ): Promise<IExercice[]> {
    const exercice = await this._exerciceService.findByBodyPart(bodyPart);
    if (exercice.length) return exercice;
    else throw new NotFoundException();
  }

  @Get('getByName/:title')
  @ApiOkResponse({ description: 'success' })
  async getByName(@Param('title') title: string): Promise<IExercice[]> {
    return this._exerciceService.findByName(title);
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
