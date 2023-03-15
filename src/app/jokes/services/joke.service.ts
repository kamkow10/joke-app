import {Injectable} from '@angular/core';
import {forkJoin, map, Observable} from "rxjs";
import {Joke} from "../models/joke.model";
import {JokeCategory} from "../models/joke-category.model";
import {RestService} from "../../core/services/rest.service";

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private restService: RestService) {}

  getJokes(): Observable<Joke[]> {
    return forkJoin([
      this.restService.getJokes(),
      this.getCategories()
    ]).pipe(map(([jokes, categories]): Joke[] => {
      return jokes.map((joke): Joke => {
        return {
          id: joke.id,
          category: categories.find(c => c.id === joke.category) as JokeCategory,
          content: joke.content
        };
      })
    }));
  }

  addJoke(categoryId: string, content: string): Observable<any> {
    return this.restService.addJoke(categoryId, content);
  }

  deleteJoke(id: string): Observable<any> {
    return this.restService.deleteJoke(id);
  }

  getCategories(): Observable<JokeCategory[]> {
    return this.restService.getJokeCategories();
  }
}
