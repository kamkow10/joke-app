import { TestBed } from '@angular/core/testing';

import { JokeService } from './joke.service';
import {RestService} from "../../core/services/rest.service";
import {of} from "rxjs";

describe('JokeService', () => {
  let service: JokeService;
  let restService: RestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokeService);
    restService = TestBed.inject(RestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should correctly map data from restService into Joke objects', (done) => {
    spyOn(restService, "getJokes").and.returnValue(of([
      {id: '1', content: '', category: 'a'},
      {id: '2', content: '', category: 'b'},
      {id: '3', content: '', category: 'a'},
    ]));
    spyOn(service, 'getCategories').and.returnValue(of([
      {id: 'a', name: 'A', code: 'aA'},
      {id: 'b', name: 'B', code: 'bB'},
    ]));
    service.getJokes().subscribe(jokes => {
      expect(jokes).toEqual([
        {id: '1', content: '', category: {id: 'a', name: 'A', code: 'aA'}},
        {id: '2', content: '', category: {id: 'b', name: 'B', code: 'bB'}},
        {id: '3', content: '', category: {id: 'a', name: 'A', code: 'aA'}},
      ]);
      done();
    })
  });
});
