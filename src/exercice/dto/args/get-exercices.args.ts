import { ArgsType, Field } from '@nestjs/graphql';
import { IsArray } from 'class-validator';

@ArgsType()
export class GetExercicesArgs {
  @Field(() => [String])
  @IsArray()
  exerciceIds: string[];
}
