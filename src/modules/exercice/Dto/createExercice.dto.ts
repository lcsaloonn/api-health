import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { IBodyPart } from 'src/modules/exercice/model/exercice.model';

export class createExerciceDto {
  @IsNotEmpty()
  @IsString()
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
