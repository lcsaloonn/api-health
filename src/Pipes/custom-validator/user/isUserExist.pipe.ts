import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserService } from 'src/modules/User/service/user.service';

@ValidatorConstraint({ name: 'UserExists', async: true })
@Injectable()
export class UserExistsPipe implements ValidatorConstraintInterface {
  constructor(private readonly _userService: UserService) {}

  async validate(value: any): Promise<boolean> {
    console.log(value);
    try {
      const user = await this._userService.findByUsername(value);
      console.log(user);
      if (user) return false;
    } catch (e) {
      return true;
    }
  }
  defaultMessage?(): string {
    return 'user already exist';
  }
}
