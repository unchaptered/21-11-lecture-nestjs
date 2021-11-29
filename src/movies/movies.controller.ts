import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAllMovies(){
        return "This will return all movies";
    }
    @Get(":id")
    getSimgleMovie(@Param("id") movieID:string){
        return `This will return single movie, id: ${movieID}`;
    }
    /* In nestJS,
        If you want to data somewhere(such as Params or Body)
        You need to request data with @(=decroator)
        @Get(":key")
        getSingleMovie(@Params("key") keyName:string)
        In two kind of data in each decorator, these name is exactly same.
        But keyName don't need to that.

        It seems like in JS,
            const {
                params:{ id:movieID }
            }=req;
    */
   @Post()
   postSingleMovie(){
       return "This will create single movie";
   }
   @Delete(":id")
   removeSingleMovie(@Param("id") movieID:string ){
       return `This will be delete single movie, id: ${movieID}`;
   }
   //@Put()
   //@Patch()
   @Patch(":id")
   patchPartOfMovie(@Param("id") movieID:string){
       return `This will patch a movie with the, id: ${movieID}`
   }
}
