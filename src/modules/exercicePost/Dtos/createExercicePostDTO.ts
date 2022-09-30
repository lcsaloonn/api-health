import {
  ArrayMinSize,
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsString,
  Validate,
} from 'class-validator';
import { ByStepText } from 'src/Domaine/Types/IExercicePost.interface';
import { ExerciceExistRule } from 'src/Pipes/custom-validator/isExerciceIdExist.pipe';

export class CreateExercicePostDTO {
  @IsNotEmpty()
  @IsMongoId()
  @Validate(ExerciceExistRule)
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
