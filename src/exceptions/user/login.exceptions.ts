import { HttpException, HttpStatus } from '@nestjs/common';

export class LoginException extends HttpException {
  constructor() {
    super('login failed', HttpStatus.BAD_REQUEST);
  }
}
