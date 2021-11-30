import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, Res  } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Get()
    getAllMovies():Movie[] {
        return this.moviesService.getAllMovies();
    }
    @Get("search")
    searchSingleMovie(@Query("year") year:string ){
        return `We are searching for a movie made affter ${year}`;
    }
    @Get(":id")
    getSingleMovie(@Param("id") movieID:number){
        return this.moviesService.getSingleMovie(movieID);
    }

    @Post()
    postSingleMovie(@Body() movieData:CreateMovieDto){
        return this.moviesService.postSingleMovie(movieData);
    }

    @Delete(":id")
    deleteSingleMovie(@Param("id") movieID:number ){
        return this.moviesService.deleteSingleMovie(movieID);
    }
    @Patch(":id")
    patchPartOfMovie(@Param("id") movieID:number, @Body() updateData){
        return this.moviesService.patchPartOfMovie(movieID, updateData);
    }
}
