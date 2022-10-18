import { ObjectId } from 'mongodb';

export class IPrograms {
  _id: ObjectId;
  name: string;
  exercice: {
    id: ObjectId;
    idUser?: ObjectId;
    repetition: number;
    realisation: {
      weight?: number;
      sets: number;
    };
  };
  //bodyPart realiser par la serveur
  bodyPart: string[];
  time: string;
  difficulty: number;
  img: string;
}
