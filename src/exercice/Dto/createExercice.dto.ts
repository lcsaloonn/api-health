import { ApiProperty } from '@nestjs/swagger';

export class createExerciceDto {
  @ApiProperty({ type: String, description: 'name' })
  name: string;
  @ApiProperty({ type: String, description: 'bodyPart', example: 'thomas' })
  bodyPart: string;
}
