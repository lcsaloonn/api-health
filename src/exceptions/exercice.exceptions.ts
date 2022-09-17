import { HttpException, HttpStatus } from '@nestjs/common';

export class ExerciceNotFoundException extends HttpException {
  constructor(msg?: string, status?: HttpStatus) {
    super(msg || 'exercice not found', status || HttpStatus.BAD_REQUEST);
  }
}
