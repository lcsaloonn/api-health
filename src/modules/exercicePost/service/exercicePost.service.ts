import { Injectable } from '@nestjs/common';
import { ExercicePostRepository } from 'src/Infrastructure/repository/exercicePost.repository';
import { CreateExercicePostDTO } from '../Dtos/createExercicePostDTO';
import { ExercicePostModel } from '../model/exercicePost.model';

@Injectable()
export class ExercicePostService {
  constructor(
    private readonly _exercicePostRespository: ExercicePostRepository,
  ) {}

  /** Create */
  async createExercicePost(post: CreateExercicePostDTO): Promise<void> {
    this._exercicePostRespository.create(
      new ExercicePostModel(
        post.idExercice,
        post.description,
        post.howToRealise,
        post.advice,
        post.imgUrl,
      ),
    );
  }
}
