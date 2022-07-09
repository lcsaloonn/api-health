import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetExerciceArgs {
  @Field()
  @IsNotEmpty()
  exerciceId: string;
}
