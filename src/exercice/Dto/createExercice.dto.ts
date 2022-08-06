import { ApiProperty } from '@nestjs/swagger';

export class createExerciceDto {
  @ApiProperty({ type: String, description: 'name', example: 'curl' })
  name: string;
  @ApiProperty({ type: String, description: 'bodyPart', example: 'arms' })
  bodyPart: string;
}
