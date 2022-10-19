import { ObjectId } from 'mongodb';
import { BodyPartEnum } from 'src/Domaine/Enums/bodyPart.enum';
import {
  IExerciceRealisation,
  ISessionExercice,
} from 'src/Domaine/Types/session.interface';

export class SessionExerciceModel implements ISessionExercice {
  id: ObjectId;
  name: string;
  bodyParts: BodyPartEnum[];
  img: string;
  time: string;
  difficulty: number;
  exercices: IExerciceRealisation[];

  constructor(
    name: string,
    bodyParts: BodyPartEnum[],
    img: string,
    time: string,
    difficulty: number,
    exercices: IExerciceRealisation[],
  ) {
    this.id = new ObjectId();
    this.name = name;
    this.bodyParts = bodyParts;
    this.img = img;
    this.time = time;
    this.difficulty = difficulty;
    this.exercices = exercices;
  }
}
