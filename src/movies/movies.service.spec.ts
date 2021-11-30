// File includes test
import { NotFoundException } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { MoviesService } from "./movies.service";


// Descript What is Test?
describe("MoviesService", () => {
  let service: MoviesService;

 // Before Testing
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  // It or Individual Test
  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("getAllMovies", ()=>{
    it("sould return an Array | Movie[]", ()=>{
      const result=service.getAllMovies();
      expect(result).toBeInstanceOf(Array);
    })
  });

  describe("getSingleMovie", ()=>{
    it("sholud return Object | Movie", ()=>{
      service.createSingleMovie({
        title:"Test Movie",
        genres:["test"],
        year: 2000,
      });
      const movie=service.getSingleMovie(1);
      expect(movie).toBeDefined();
      // expect(movie.id).toEqual(1); // This is just for example...
    });
    it("should throw Exception | NotFoundException", ()=>{
      try{
        // Ctrl + Click > Check in the function "getSingleMovie(id:number)";
        // If you don't find movie, we throw new NotFoundException("inner-text");
        service.getSingleMovie(999);
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
        // expect(e.message).toEqual("Movie with ID 999 not found."); // This is just for example...
      }
    });
  });
  
  describe("deleteSingleMovie", ()=>{
    it("delete a Object | Movie", ()=>{
      service.createSingleMovie({
        title:"Test Movie",
        genres:["test"],
        year: 2000,
      });
      const allMovies=service.getAllMovies();
      service.deleteSingleMovie(1);
      const afterDelete=service.getAllMovies();
      expect(afterDelete.length).toBeLessThan(allMovies.length);
      // expect(afterDelete.length).toEqual(allMovies.length-1); // This is for example.
    });

    it("should throw Exception | NotFoundException",()=>{
      try{
        service.deleteSingleMovie(999);
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe("createSingleMovie", ()=>{
    it("should create Object | movie", ()=>{
      const beforeCreate=service.getAllMovies().length;
      service.createSingleMovie({
        title:"Test Movie",
        genres:["test"],
        year: 2000,
      });
      const afterCreate=service.getAllMovies().length;
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    })
  });

  describe("patchPartOfMovie", ()=>{
    it("should update Object | movie", ()=>{
      service.createSingleMovie({
        title:"Test Movie",
        genres:["test"],
        year: 2000,
      });
      service.patchPartOfMovie(1,{title:"Updated Test"});
      const movie=service.getSingleMovie(1);
      expect(movie.title).toEqual("Updated Test");
    });
  });
});