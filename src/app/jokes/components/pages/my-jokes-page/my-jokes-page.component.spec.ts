import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyJokesPageComponent } from './my-jokes-page.component';
import {JokeComponent} from "../../elements/joke/joke.component";
import {DeleteJokeDirective} from "../../../directives/delete-joke.directive";

describe('MyJokesPageComponent', () => {
  let component: MyJokesPageComponent;
  let fixture: ComponentFixture<MyJokesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MyJokesPageComponent,
        JokeComponent,
        DeleteJokeDirective
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyJokesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly slice jokes into two parts', () => {
    component.jokes = [
      {id: '1', content: '', category: {id: '1', name: '', code: ''}},
      {id: '2', content: '', category: {id: '1', name: '', code: ''}},
      {id: '3', content: '', category: {id: '1', name: '', code: ''}}
    ];
    expect(component.firstHalfOfJokes).toEqual([
      component.jokes[0], component.jokes[1]
    ]);
    expect(component.secondHalfOfJokes).toEqual([
      component.jokes[2]
    ]);

    component.jokes = [
      {id: '1', content: '', category: {id: '1', name: '', code: ''}},
      {id: '2', content: '', category: {id: '1', name: '', code: ''}}
    ];
    expect(component.firstHalfOfJokes).toEqual([
      component.jokes[0]
    ]);
    expect(component.secondHalfOfJokes).toEqual([
      component.jokes[1]
    ]);

    component.jokes = [
      {id: '1', content: '', category: {id: '1', name: '', code: ''}}
    ];
    expect(component.firstHalfOfJokes).toEqual([
      component.jokes[0]
    ]);
    expect(component.secondHalfOfJokes).toEqual([]);
  })
});
