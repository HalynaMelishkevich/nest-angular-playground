import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      process.env.ENVIRONMENT === 'dev'
        ? 'http://localhost:4200'
        : 'https://nest-angular-playground-frontend.onrender.com',
    ],
  });

  await app.listen(process.env.PORT || 3000);
}

bootstrap();
