import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "./../src/app.module";

describe("AppController (e2e)", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe("/", ()=>{
    it("GET",()=>{
      return request(app.getHttpServer())
        .get("/")
        .expect(200)
        .expect("Welcome to my Movie API");
    });
  });

  describe("/movies", ()=>{
    it("GET",()=>{
      return request(app.getHttpServer())
        .get("/movies")
        .expect(200)
        .expect([]);
    });
    it("POST", ()=>{
      return request(app.getHttpServer())
        .post("/movies")
        .send({ title:"Test", year:2000, genres:["test"] })
        .expect(201);
    });
    it("DELETE", ()=>{
      return request(app.getHttpServer())
        .delete("/movies")
        .expect(404);
        // 404 menas Method Not Found
        // 405 means Method Not Allowed
    });
  });
  describe('/movies/:id', () => {
    it('GET 200', () => {
      return request(app.getHttpServer())
        .get('/movies/1')
        .expect(200);
    });
    it('GET 404', () => {
      return request(app.getHttpServer())
        .get('/movies/999')
        .expect(404);
    });
    it('PATCH 200', () => {
      return request(app.getHttpServer())
        .patch('/movies/1')
        .send({ title: 'Updated Test' })
        .expect(200);
    });
    it('DELETE 200', () => {
      return request(app.getHttpServer())
        .delete('/movies/1')
        .expect(200);
    });
  });
});