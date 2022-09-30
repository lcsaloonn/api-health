import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ExerciceRepository } from 'src/Infrastructure/repository/exercice.repository';

@ValidatorConstraint({ name: 'ExerciceExists', async: true })
@Injectable()
export class ExerciceExistRule implements ValidatorConstraintInterface {
  constructor(private exerciceRepository: ExerciceRepository) {}

  async validate(value: string): Promise<boolean> {
    try {
      const data = await this.exerciceRepository.findOne(value);

      if (data) return true;
      else return false;
    } catch (e) {
      return false;
    }
  }
  defaultMessage(): string {
    return 'Exercice doesnt exist';
  }
}
