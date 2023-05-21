import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const port = process.env.APP_PORT;
  await app.listen(port, () => {
    console.log(`server is runing on port:${port}`);
  });
}
bootstrap();
