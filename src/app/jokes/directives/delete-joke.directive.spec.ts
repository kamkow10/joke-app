import { DeleteJokeDirective } from './delete-joke.directive';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {inject} from "@angular/core/testing";

describe('DeleteJokeDirective', () => {
  it('should create an instance', inject([NgbModal], (modal: NgbModal) => {
    const directive = new DeleteJokeDirective(modal);
    expect(directive).toBeTruthy();
  }));
});
