import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3001', // Autoriser l'accès depuis cette origine
    methods: ['GET', 'POST', 'DELETE', 'PATCH'], // Autoriser ces méthodes HTTP
    allowedHeaders: ['Content-Type', 'Authorization'], // Autoriser ces en-têtes
  });

  const config = new DocumentBuilder()
    .setTitle('Logiciel adaptatif KeYv Swagger')
    .setDescription(`Toute les routes de l'api REST`)
    .setVersion('1.0')
    .build(); 
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
