import { Module } from '@nestjs/common';
import { ExerciceModule } from './exercice/exercice.module';
import { UserModule } from './User/user.module';

@Module({
  imports: [UserModule, ExerciceModule],
})
export class indexModule {}
