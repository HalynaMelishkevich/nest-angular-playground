import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus(): {status: 'up'|'down'} {
    return {
      status: 'up',
    };
  }
}
