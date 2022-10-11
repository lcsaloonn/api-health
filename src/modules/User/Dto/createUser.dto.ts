import { IsNotEmpty, IsString, Validate } from 'class-validator';
import { UserExistsPipe } from 'src/Pipes/custom-validator/user/isUserExist.pipe';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Validate(UserExistsPipe)
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
