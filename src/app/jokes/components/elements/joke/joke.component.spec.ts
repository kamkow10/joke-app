import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeComponent } from './joke.component';
import {DeleteJokeDirective} from "../../../directives/delete-joke.directive";

describe('JokeComponent', () => {
  let component: JokeComponent;
  let fixture: ComponentFixture<JokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeComponent, DeleteJokeDirective ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
