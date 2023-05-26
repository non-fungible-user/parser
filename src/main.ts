import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.API_PORT || 3000;
  const ENV = process.env.ENV;
  const app = await NestFactory.create(AppModule, {
  });

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  if (ENV === 'DEV') setupOpenApi(app);

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    optionsSuccessStatus: 204,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  await app.listen(port, '0.0.0.0');
}

function setupOpenApi(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/doc', app, document);
}
bootstrap();
