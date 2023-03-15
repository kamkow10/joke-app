import {Component, OnDestroy, OnInit} from '@angular/core';
import {Joke} from "../../../models/joke.model";
import {Subscription} from "rxjs";
import {JokeService} from "../../../services/joke.service";

@Component({
  selector: 'app-my-jokes-page',
  templateUrl: './my-jokes-page.component.html',
  styleUrls: ['./my-jokes-page.component.scss']
})
export class MyJokesPageComponent implements OnInit, OnDestroy {
  jokes: Joke[] = [];
  private _getJokes!: Subscription;

  constructor(private jokeService: JokeService) {
  }

  ngOnInit(): void {
    this._getJokes = this.getJokes();
  }

  ngOnDestroy(): void {
    this._getJokes.unsubscribe();
  }

  get firstHalfOfJokes(): Joke[] {
    return this.jokes.slice(0, Math.ceil(this.jokes.length / 2))
  }

  get secondHalfOfJokes(): Joke[] {
    return this.jokes.slice(Math.ceil(this.jokes.length / 2), this.jokes.length);
  }

  private getJokes(): Subscription {
    return this.jokeService.getJokes().subscribe(jokes => {
      this.jokes = jokes;
    });
  }
}
