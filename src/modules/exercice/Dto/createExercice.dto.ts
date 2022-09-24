import { IBodyPart } from 'src/modules/exercice/model/exercice.model';

export class createExerciceDto {
  title: string;

  description: string;

  raiting: number;

  bodyPart: IBodyPart;

  imgaeUrl: string;
}
