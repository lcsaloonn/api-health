import { ApolloDriver } from '@nestjs/apollo/dist/drivers/apollo.driver';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExerciceModule } from './exercice/exercice.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    GraphQLModule.forRoot({ autoSchemaFile: true, driver: ApolloDriver }),
    ExerciceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
