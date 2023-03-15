import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteJokeConfirmModalComponent } from './delete-joke-confirm-modal.component';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

describe('DeleteJokeConfirmModalComponent', () => {
  let component: DeleteJokeConfirmModalComponent;
  let fixture: ComponentFixture<DeleteJokeConfirmModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteJokeConfirmModalComponent ],
      providers: [ NgbActiveModal ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteJokeConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
