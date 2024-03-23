import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = 3000; // TODO: ambil port dari env
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`App run on http://localhost:${port}`);
}
bootstrap();
