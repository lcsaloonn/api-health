import { ApiProperty } from '@nestjs/swagger';

export class CreateExercicePostSchema {
  @ApiProperty({ type: String, description: 'idExercice', example: '01' })
  idExercice: string;

  @ApiProperty({
    type: String,
    description: 'idTitle',
    example: 'idTitle',
  })
  idTitle: string;

  @ApiProperty({
    type: String,
    description: 'description',
    example: 'blablabla',
  })
  description: string;

  @ApiProperty({
    isArray: true,
    description: 'howToRealise',
    example: [{ id: 1, text: '' }],
  })
  howToRealise: string[];

  @ApiProperty({
    isArray: true,
    description: 'advice',
    example: [''],
  })
  advice: string[];

  @ApiProperty({
    type: String,
    description: 'imgUrl',
    example: 'url',
  })
  imgUrl: string;
}
