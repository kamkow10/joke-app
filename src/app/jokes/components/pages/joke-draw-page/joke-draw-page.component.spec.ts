import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeDrawPageComponent } from './joke-draw-page.component';
import {JokeComponent} from "../../elements/joke/joke.component";

describe('JokeDrawPageComponent', () => {
  let component: JokeDrawPageComponent;
  let fixture: ComponentFixture<JokeDrawPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        JokeDrawPageComponent,
        JokeComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeDrawPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('presentRandom', () => {

    it ('should present random joke, which is not current one', () => {
      component.jokes = [
        {id: '1', content: '', category: {id: '1', name: '', code: ''}},
        {id: '1', content: '', category: {id: '1', name: '', code: ''}}
      ];
      // First draw
      component.presentRandom();
      expect(component.presentingJoke).toBeTruthy();
      const firstPresentedJoke = component.presentingJoke;
      // Second draw
      component.presentRandom();
      expect(component.presentingJoke).not.toEqual(firstPresentedJoke);
      const secondPresentedJoke = component.presentingJoke;
      // Third draw
      component.presentRandom();
      expect(component.presentingJoke).not.toEqual(secondPresentedJoke);
      expect(component.presentingJoke).toEqual(firstPresentedJoke);
    })

    it ('should repeatedly present the same single joke', () => {
      component.jokes = [
        {id: '1', content: '', category: {id: '1', name: '', code: ''}}
      ];
      // First draw
      component.presentRandom();
      expect(component.presentingJoke).toBeTruthy();
      const firstPresentedJoke = component.presentingJoke;
      // Second draw
      component.presentRandom();
      expect(component.presentingJoke).toEqual(firstPresentedJoke);
      // Third draw
      component.presentRandom();
      expect(component.presentingJoke).toEqual(firstPresentedJoke);
    })
  })
});
