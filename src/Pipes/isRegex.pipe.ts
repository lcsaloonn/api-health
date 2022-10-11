import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

export function isRegex(
  property: RegExp,
  validationOptions?: ValidationOptions,
) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [property],
      validator: IsRegexPipe,
    });
  };
}

@ValidatorConstraint({ name: 'isRegexPipe' })
export class IsRegexPipe implements ValidatorConstraintInterface {
  validate(value: any, validationArguments?: ValidationArguments): boolean {
    const regex = validationArguments.constraints[0];
    const username = validationArguments.value;
    return regex.test(username);
  }
  defaultMessage?(validationArguments?: ValidationArguments): string {
    return `${validationArguments.property} is not good`;
  }
}
