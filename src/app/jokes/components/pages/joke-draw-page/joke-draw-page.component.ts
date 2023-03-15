import {Component, OnDestroy, OnInit} from '@angular/core';
import {JokeService} from "../../../services/joke.service";
import {Joke} from "../../../models/joke.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-joke-draw-page',
  templateUrl: './joke-draw-page.component.html',
  styleUrls: ['./joke-draw-page.component.scss']
})
export class JokeDrawPageComponent implements OnInit, OnDestroy {
  jokes: Joke[] = [];
  presentingJoke!: Joke;
  private _getJokes!: Subscription;

  constructor(private jokeService: JokeService) {
  }

  ngOnInit(): void {
    this._getJokes = this.getJokesAndPresentRandom();
  }

  ngOnDestroy(): void {
    this._getJokes.unsubscribe();
  }

  presentRandom(): void {
    if (this.jokes.length == 0) {
      return;
    } else if (this.jokes.length == 1) {
      this.presentingJoke = this.jokes[0];
      return;
    }
    this.presentingJoke = this.getNewRandomJokeToPresent();
  }

  private getJokesAndPresentRandom(): Subscription {
    return this.jokeService.getJokes().subscribe(jokes => {
      this.jokes = jokes;
      this.presentRandom();
    });
  }

  private getNewRandomJokeToPresent(): Joke {
    const notPresentingJokes = [...this.jokes].filter(j => j.id !== this.presentingJoke?.id);
    return notPresentingJokes[Math.floor(Math.random() * notPresentingJokes.length)];
  }
}
