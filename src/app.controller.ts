import { Controller, Get } from '@nestjs/common';
import { getHeapStatistics } from 'v8';
import { AppService } from './app.service';

/* Function of Controller
  get Url
  return Result of Functions
*/
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/Hello")
  getHi(): string {
    return this.appService.getHi();
  }
}

/* @ menas "It is Router(express)!!"
 *  @Get("/url")
 *  ssayHello << menas Controlelr(express)
 */