import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[]=[];

    getAllMovies(): Movie[] {
        return this.movies;
    }
    getSingleMovie(id:string): Movie {
        const movie=this.movies.find(movie=>movie.id===+id);
        if(!movie){
            throw new NotFoundException(`Movie with ID ${id} not found.`);
        }
        return movie;
    }
    deleteSingleMovie(id:string) {
        this.getSingleMovie(id);
        this.movies = this.movies.filter(movie => movie.id !== +id);
    }
    //create
    postSingleMovie(movieData){
        this.movies.push({
            id:this.movies.length+1,
            ...movieData
        });
    }
    //update
    patchPartOfMovie(id: string, updateData) {
        const movie = this.getSingleMovie(id);
        this.deleteSingleMovie(id);
        this.movies.push({ ...movie, ...updateData });
    }
}
