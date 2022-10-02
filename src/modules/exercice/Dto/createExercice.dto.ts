import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
  Validate,
} from 'class-validator';
import { IBodyPart } from 'src/modules/exercice/model/exercice.model';
import { DataExistRule } from 'src/Pipes/custom-validator/isDataExist.pipe';

export class createExerciceDto {
  // ne doigt pas deja exister
  @IsNotEmpty()
  @IsString()
  @Validate(DataExistRule)
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @Max(5)
  raiting: number;

  @IsNotEmpty()
  @IsEnum(IBodyPart)
  bodyPart: IBodyPart;

  @IsNotEmpty()
  @IsString()
  imageUrl: string;
}
