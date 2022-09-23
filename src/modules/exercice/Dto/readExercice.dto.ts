import { IBodyPart } from 'src/Domaine/models/exercice.model';

export class readExerciceDto {
  _id: string;
  title: string;
  description: string;
  raiting: number;
  bodyPart: IBodyPart;
  imgaeUrl: string;
}
