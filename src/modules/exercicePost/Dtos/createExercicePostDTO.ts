import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsString,
  Validate,
  ValidateNested,
} from 'class-validator';
import { ContentModel } from 'src/Domaine/models/content.model';
import { ExerciceExistFilter } from 'src/filters/exerciceExist.filter';
import { ArrayRule } from 'src/Pipes/custom-validator/isArrayTypeOf.pipe';

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
  @ArrayMinSize(1)
  @Validate(ArrayRule)
  howToRealise: ContentModel[];

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  advice: string[];

  @IsNotEmpty()
  @IsString()
  imgUrl: string;
}
