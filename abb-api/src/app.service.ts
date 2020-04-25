import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTest(): Object {
    return {
      message: 'CECI EST UN TEST QUI FONCTIONNE? OUI MONSIEUR!'
    };
  }
}
