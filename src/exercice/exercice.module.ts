import { Module } from '@nestjs/common';
import { ExerciceResolver } from './exercice.resolver';
import { ExerciceService } from './exercice.service';

@Module({ providers: [ExerciceResolver, ExerciceService] })
export class ExerciceModule {}
