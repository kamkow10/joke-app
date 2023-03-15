import {Directive, ElementRef, HostListener} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {JokeFormModalComponent} from "../components/modals/joke-form-modal/joke-form-modal.component";

@Directive({
  selector: '[appAddJoke]'
})
export class AddJokeDirective {

  constructor(private modalService: NgbModal) {
  }

  @HostListener('click') onClick(): void {
    this.modalService.open(JokeFormModalComponent, {
      centered: true,
      size: 'lg',
    });
  }

}
