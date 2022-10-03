import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ExerciceRepository } from 'src/Infrastructure/repository/exercice.repository';
import { CreateExercicePostDTO } from 'src/modules/exercicePost/Dtos/createExercicePostDTO';

@ValidatorConstraint({ name: 'ExerciceExists', async: true })
@Injectable()
export class DataRelatedToIdRule implements ValidatorConstraintInterface {
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

      if (data) {
        const currentObject: CreateExercicePostDTO = <CreateExercicePostDTO>(
          validationArguments.object
        );
        return currentObject.idExercice === data._id.toString() ? true : false;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  defaultMessage(): string {
    return "post name doesn't correspond to id ";
  }
}
