import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { MongoDb } from './Infrastructure/DataBase/db.connection';
const port = process.env.PORT || 3001;

async function bootstrap() {
  await MongoDb.instance.connect();
  const app = await NestFactory.create(AppModule, {
    cors: { credentials: true, origin: 'http://localhost:3000' },
  });

  //to enable class validator to have injectable
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  //PIPES
  app.useGlobalPipes(new ValidationPipe());

  //Cookie
  app.use(cookieParser());

  //SWAGER
  const config = new DocumentBuilder()
    .setTitle('Brown-bag')
    .setDescription('The Brown-bag API description')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // app.enableCors();
  await app.listen(port, () => console.log(`listen on port :${port}`));
}
bootstrap();
