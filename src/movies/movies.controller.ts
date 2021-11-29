import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAllMovies(){
        return "This will return all movies";
    }
    @Get("search")
    searchSingleMovie(@Query("year") year:string ){
        return `We are searching for a movie made affter ${year}`;
    }
    @Get(":id")
    getSimgleMovie(@Param("id") movieID:string){
        return `This will return single movie, id: ${movieID}`;
    }

    @Post()
    postSingleMovie(@Body() movieData){
        console.log(movieData);
        return "This will create single movie";
    }

    @Delete(":id")
    removeSingleMovie(@Param("id") movieID:string ){
        return `This will be delete single movie, id: ${movieID}`;
    }
    @Patch(":id")
    patchPartOfMovie(@Param("id") movieID:string, @Body() updateData){
        return {
            updateMovie:movieID,
            ...updateData,
        }
    }
}
