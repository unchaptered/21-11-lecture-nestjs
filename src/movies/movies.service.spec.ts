// File includes test

import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';


// Descript What is Test?
describe('MoviesService', () => {
  let service: MoviesService;

 // Before Testing
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  // It or Individual Test
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be 4', ()=>{
    expect(2+3).toEqual(5)
  });
});
