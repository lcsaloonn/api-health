import { Module } from '@nestjs/common';
import { ExerciceModule } from './exercice/exercice.module';
import { ExercicePostModule } from './exercicePost/exercicePost.module';
import { UserModule } from './User/user.module';

@Module({
  imports: [UserModule, ExerciceModule, ExercicePostModule],
})
export class indexModule {}
