import { IsNotEmpty, IsString, Validate } from 'class-validator';
import { authRegex } from 'src/Domaine/Enums/Regex.enum';
import { isRegex } from 'src/Pipes/isRegex.pipe';
import { UserExistsPipe } from 'src/Pipes/user/isUserExist.pipe';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Validate(UserExistsPipe)
  @isRegex(new RegExp(authRegex.USERNAME_REGEX))
  username: string;

  @IsNotEmpty()
  @IsString()
  @isRegex(new RegExp(authRegex.PASSWORD_REGEX))
  password: string;
}
