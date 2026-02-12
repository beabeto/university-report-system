import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3000;

  // Force IPv4 so Windows PowerShell can connect
  await app.listen(port, '127.0.0.1');

  console.log(`Application is running on: http://127.0.0.1:${port}`);
}
bootstrap();
 