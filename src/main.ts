import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path'; // Import join from path to handle file paths

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  
  app.enableCors({
    origin: '*', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });


  
  app.setGlobalPrefix('api', { exclude: ['api/docs'] }); // Exclude Swagger docs from prefix

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('IELTS APP API')
    .setDescription('API Documentation for NestJS IELTS App')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
}

bootstrap();