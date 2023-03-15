import {ComponentFixture, TestBed} from '@angular/core/testing';

import {JokeFormModalComponent} from './joke-form-modal.component';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ReactiveFormsModule} from "@angular/forms";

describe('JokeFormModalComponent', () => {
  let component: JokeFormModalComponent;
  let fixture: ComponentFixture<JokeFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        JokeFormModalComponent
      ],
      imports: [ ReactiveFormsModule ],
      providers: [ NgbActiveModal ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
