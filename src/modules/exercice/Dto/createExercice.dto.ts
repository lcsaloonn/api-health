import { ApiProperty } from '@nestjs/swagger';

export class createExerciceDto {
  @ApiProperty({ type: String, description: 'name', example: 'curl' })
  name: string;
  @ApiProperty({ type: String, description: 'bodyPart', example: 'arms' })
  bodyPart: string;
  @ApiProperty({
    type: String,
    description: 'description',
    example: 'mouvement de bas en haut',
  })
  description: string;
  @ApiProperty({ type: Number, description: 'level', example: '5' })
  level: number;
}
