import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

/* @ decorator Looks like JSX Components
 * @ add functions in Class
 * @ is positioned next to function
 */

@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})

/* AppController
 *  AooController seems like Express Router-Controlelr(in Routers-Controlelrs)
 *  @Get, Post..... (seems like RESTful URl)
 */

export class AppModule {}
