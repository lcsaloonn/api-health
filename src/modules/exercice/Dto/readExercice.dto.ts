import { IBodyPart } from 'src/modules/exercice/model/exercice.model';

export class readExerciceDto {
  _id: string;
  title: string;
  idTitle: string;
  description: string;
  raiting: number;
  bodyPart: IBodyPart;
  imageUrl: string;
}
