import { Injectable } from '@nestjs/common';
import { HelloResponseDto } from './dto/hello.dto';
import { HealthResponseDto } from './dto/health.dto';

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

  health(): HealthResponseDto {
  return {
    status: 'ok',
    uptimeSeconds: Math.floor(process.uptime()),
    now: new Date().toISOString(),
  };
}
}