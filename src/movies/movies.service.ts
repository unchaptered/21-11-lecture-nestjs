import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[]=[];

    getAllMovies(): Movie[] {
        return this.movies;
    }
    getSingleMovie(id:number): Movie {
        const movie=this.movies.find(movie=>movie.id===+id);
        if(!movie){
            throw new NotFoundException(`Movie with ID ${id} not found.`);
        }
        return movie;
    }
    deleteSingleMovie(id:number) {
        this.getSingleMovie(id);
        this.movies = this.movies.filter(movie => movie.id !== +id);
    }
    //create
    postSingleMovie(movieData: CreateMovieDto){
        this.movies.push({
            id:this.movies.length+1,
            ...movieData
        });
    }
    //update
    patchPartOfMovie(id: number, updateData:UpdateMovieDto) {
        const movie = this.getSingleMovie(id);
        this.deleteSingleMovie(id);
        this.movies.push({ ...movie, ...updateData });
    }
}
