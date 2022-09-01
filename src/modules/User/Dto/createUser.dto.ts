import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ type: String, description: 'username', example: 'jean' })
  username: string;
  @ApiProperty({ type: String, description: 'password', example: 'Jhopm55' })
  password: string;
}
