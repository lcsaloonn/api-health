import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Exercice } from 'src/models/exercice.model';
import { GetExerciceArgs } from './dto/args/get-exercice.args';
import { GetExercicesArgs } from './dto/args/get-exercices.args';
import { CreateExerciceInput } from './dto/input/create-exercice.input';
import { ExerciceService } from './exercice.service';

@Resolver(() => Exercice)
export class ExerciceResolver {
  constructor(private readonly exerciceService: ExerciceService) {}

  @Query(() => Exercice, { name: 'exerciceId', nullable: true })
  getExercice(@Args() getExerciceArgs: GetExerciceArgs): Exercice {
    return this.exerciceService.getExercice(getExerciceArgs);
  }

  // @Query(() => [Exercice], { name: 'exerciceIds ', nullable: 'items' })
  // getExercices(@Args() getExercicesArgs: GetExercicesArgs): Exercice[] {
  //   return this.exerciceService.getExercices(getExercicesArgs);
  // }

  @Mutation(() => Exercice)
  createExercice(
    @Args('createExerciceData') createExerciceData: CreateExerciceInput,
  ): Exercice {
    return this.exerciceService.createExercice(createExerciceData);
  }

  //updateExercice(): Exercice {}
}
