import { Injectable } from '@nestjs/common';
import { IExercicePost } from 'src/Domaine/Types/IExercicePost.interface';
import { NotFoundException } from 'src/exceptions/notFound.exceptions';
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
        post.idTitle,
        post.description,
        post.howToRealise,
        post.advice,
        post.imgUrl,
      ),
    );
  }
  /**
   * FIND
   */
  async findExercicePostByName(data: string): Promise<IExercicePost> {
    const post = await this._exercicePostRespository.findOneByData(
      'idTitle',
      data,
    );
    if (post) return post;
    else throw new NotFoundException();
  }
}
