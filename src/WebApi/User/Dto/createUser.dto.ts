import { ApiProperty } from '@nestjs/swagger';

export class createUserDto {
  @ApiProperty({ type: String, description: 'username', example: 'jean' })
  username: string;
  @ApiProperty({ type: String, description: 'password', example: 'Jhopm55' })
  password: string;
  @ApiProperty({
    type: String,
    description: 'email',
    example: 'jean@gmail.com',
  })
  email: string;
}
