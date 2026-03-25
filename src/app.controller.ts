import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiResponse } from './interfaces/response.interface';
import { version } from 'os';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    const result = this.appService.getHello()
    return {
      success: true,
      data: 0,
      message: result,
    };
  }
}
