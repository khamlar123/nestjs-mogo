import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const config = new DocumentBuilder()
  //   .setTitle('Swagger')
  //   .setDescription('NestJS Project')
  //   .setVersion('1.0')
  //   .addTag('api')c
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('swagger', app, document);
  app.enableCors();
  await app.listen(3030);
}
bootstrap();
