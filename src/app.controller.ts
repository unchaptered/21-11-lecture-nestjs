import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/Hello")
  sayHello():string {
    return "Hello everyone";
  }
}

/* @ menas "It is Router(express)!!"
 *  @Get("/url")
 *  ssayHello << menas Controlelr(express)
 */