import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Exercice {
  @Field()
  exerciceId: string;
  @Field()
  name: string;
  @Field()
  bodyPart: string;
}
