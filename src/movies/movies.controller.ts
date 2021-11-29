import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
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
    getSingleMovie(@Param("id") movieID:string){
        return this.moviesService.getSingleMovie(movieID);
    }

    @Post()
    postSingleMovie(@Body() movieData){
        return this.moviesService.postSingleMovie(movieData);
    }

    @Delete(":id")
    deleteSingleMovie(@Param("id") movieID:string ){
        return this.moviesService.deleteSingleMovie(movieID);
    }
    @Patch(":id")
    patchPartOfMovie(@Param("id") movieID:string, @Body() updateData){
        return this.moviesService.patchPartOfMovie(movieID, updateData);
    }
}
