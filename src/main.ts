import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes( new ValidationPipe({
    whitelist:true,
    // filter some object have some property without any decorator
    // 아무 decorator도 없는 어떠한 property 의 object 거르기
    forbidNonWhitelisted:true,
    // filter some property don't exist in create-movie.dto.ts
    transform: true,
    // If you want number, this option make some thing to number according to entity
    // such as,
    // getSingleMovie need id... but it is string, because url makes all porperties to string.
    // but ValidationPipe.transform:true automatically make it number.
  }) );
  await app.listen(3000);
}

bootstrap();