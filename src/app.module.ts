import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/* @ decorator Looks like JSX Components
 * @ add functions in Class
 * @ is positioned next to function
 */

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})

/* AppController
    AooController seems like Express Router-Controlelr(in Routers-Controlelrs)
    @Get, Post..... (seems like RESTful URl)
 */

export class AppModule {}
