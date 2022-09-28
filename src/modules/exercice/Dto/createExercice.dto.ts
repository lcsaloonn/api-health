import { IsEnum, IsNumber, IsString, IsUrl, Max, Min } from 'class-validator';
import { IBodyPart } from 'src/modules/exercice/model/exercice.model';

export class createExerciceDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @Max(5)
  raiting: number;

  @IsEnum(IBodyPart)
  bodyPart: IBodyPart;

  @IsString()
  imageUrl: string;
}
