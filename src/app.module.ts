import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

/* @ decorator Looks like JSX Components
 * @ add functions in Class
 * @ is positioned next to function
 */

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [],
})

/* AppController
 *  AooController seems like Express Router-Controlelr(in Routers-Controlelrs)
 *  @Get, Post..... (seems like RESTful URl)
 */

export class AppModule {}
