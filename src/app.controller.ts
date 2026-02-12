import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import type { HelloResponseDto } from './dto/hello.dto';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  hello(): string {
    return this.appService.hello();
  }

  @Get('hello/:name')
  helloName(@Param('name') name: string): HelloResponseDto {
    return this.appService.helloName(name);
  }
}
