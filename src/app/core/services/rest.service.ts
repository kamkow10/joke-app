import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import jokes from '../mocks/jokes.json';
import categories from '../mocks/categories.json';
import {JokeCategory} from "../../jokes/models/joke-category.model";

// This service was made to simulate rest communication with backend server.

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private _jokes = jokes;
  private _categories = categories;

  constructor() {}

  getJokes(): Observable<any[]> {
    return of(this._jokes);
  }

  addJoke(categoryId: string, content: string): Observable<any> {
    this._jokes.unshift({
      id: this.generateId(),
      category: categoryId,
      content: content
    });
    return of({});
  }

  deleteJoke(id: string): Observable<any> {
    this._jokes = this._jokes.filter(j => j.id !== id);
    return of({});
  }

  getJokeCategories(): Observable<JokeCategory[]> {
    return of(this._categories);
  }

  // Simulate backend-side id generating
  private generateId(): string {
    let result = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let counter = 0;
    while (counter < 40) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
      counter += 1;
    }
    return result;
  }
}
