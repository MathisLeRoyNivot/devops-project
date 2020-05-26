import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
var fs = require('file-system');

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('./secrets/ca-key.pem'),
    cert: fs.readFileSync('./secrets/ca-cert.pem'),
  };

  const app = await NestFactory.create(AppModule, {
    cors: true, 
    httpsOptions
  });
  
  app.enableCors();
  await app.listen(3333);
}
bootstrap();
