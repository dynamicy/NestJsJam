import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthCheckController {
  constructor() {}

  @Get()
  checkHealth(): string {
    return 'Hello World!';
  }
}
