import { ApiProperty } from '@nestjs/swagger';

export class CreateUserSchema {
  @ApiProperty({ type: String, description: 'username', example: 'thomas' })
  username: string;
  @ApiProperty({ type: String, description: 'password', example: 'Thomas55*' })
  password: string;
}
