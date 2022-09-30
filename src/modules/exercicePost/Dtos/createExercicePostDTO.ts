import {
  ArrayMinSize,
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { ByStepText } from 'src/Domaine/Types/IExercicePost.interface';
import { ExerciceExistFilter } from 'src/filters/exerciceExist.filter';

export class CreateExercicePostDTO {
  @IsNotEmpty()
  @IsMongoId()
  @ExerciceExistFilter()
  idExercice: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  howToRealise: ByStepText[];

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  advice: string[];
}
