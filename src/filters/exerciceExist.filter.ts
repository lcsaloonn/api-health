import { registerDecorator, ValidationOptions } from 'class-validator';
import { ExerciceExistRule } from 'src/Pipes/isExerciceIdExist.pipe';

export function ExerciceExistFilter(validatiionOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'ExerciceExists',
      target: object.constructor,
      propertyName: propertyName,
      options: validatiionOptions,
      validator: ExerciceExistRule,
    });
  };
}
