import { Field, InputType } from '@nestjs/graphql';
import { isNotEmpty } from 'class-validator';

@InputType()
export class CreateExerciceInput {
  @Field()
  // @isNotEmpty()
  name: string;

  @Field()
  // @isNotEmpty()
  bodyPart: string;
}
