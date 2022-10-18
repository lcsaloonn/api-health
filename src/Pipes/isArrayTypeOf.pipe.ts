import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

//Need to be refactor
@ValidatorConstraint({ name: 'ArrayRule' })
@Injectable()
export class ArrayRule implements ValidatorConstraintInterface {
  validate(value: Array<{ id: number; text: string }>): boolean {
    let error = false;

    value.forEach((element) => {
      if (typeof element.id == 'number' && typeof element.text == 'string') {
        error = true;
      }
    });

    if (error) return true;
    else return false;
  }
  defaultMessage(): string {
    return 'Array not the correct type {id:number , text:string}';
  }
}
