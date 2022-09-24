import { ApiProperty } from '@nestjs/swagger';
import { IBodyPart } from '../model/exercice.model';

export class CreateExerciceSchema {
  @ApiProperty({ type: String, description: 'name', example: 'curl' })
  title: string;

  @ApiProperty({ type: String, description: 'description', example: '' })
  description: string;

  @ApiProperty({ type: Number, description: 'raiting', example: '5' })
  raiting: number;

  @ApiProperty({
    enum: IBodyPart,
    description: 'bodyPart',
    example: IBodyPart.ARMS,
    required: true,
    isArray: true,
  })
  bodyPart: IBodyPart;

  @ApiProperty({
    type: String,
    description: 'urlImage',
    example: 'face-pull-exercice-epaules.jpg',
  })
  imgaeUrl: string;
}
