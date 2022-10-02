import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ExerciceRepository } from 'src/Infrastructure/repository/exercice.repository';

@ValidatorConstraint({ name: 'ExerciceExists', async: true })
@Injectable()
export class DataExistRule implements ValidatorConstraintInterface {
  constructor(private exerciceRepository: ExerciceRepository) {}

  async validate(
    value: string,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    try {
      const data = await this.exerciceRepository.findOneByData(
        validationArguments.property,
        value,
      );
      if (data) return false;
      else return true;
    } catch (e) {
      return false;
    }
  }
  defaultMessage(): string {
    return 'data passed already exist';
  }
}
