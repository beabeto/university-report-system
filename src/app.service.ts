import { Injectable } from '@nestjs/common';
import { HelloResponseDto } from './dto/hello.dto';

@Injectable()
export class AppService {
  hello(): string {
    return 'ayna';
  }

  helloName(name: string): HelloResponseDto {
    const cleaned = name.trim();
    return {
      message: `Hello, ${cleaned}!`,
      at: new Date().toISOString(),
    };
  }
}