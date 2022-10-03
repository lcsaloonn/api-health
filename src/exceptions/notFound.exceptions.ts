import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundException extends HttpException {
  constructor(msg?: string, status?: HttpStatus) {
    super(msg || 'not found', status || HttpStatus.BAD_REQUEST);
  }
}
