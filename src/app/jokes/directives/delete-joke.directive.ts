import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {
  DeleteJokeConfirmModalComponent
} from "../components/modals/delete-joke-confirm-modal/delete-joke-confirm-modal.component";
import {JokeService} from "../services/joke.service";
import {Joke} from "../models/joke.model";

@Directive({
  selector: '[appDeleteJoke]'
})
export class DeleteJokeDirective {
  @Input() jokeId!: string;

  constructor(private modalService: NgbModal) {
  }

  @HostListener('click') onClick(): void {
    const modalRef = this.modalService.open(DeleteJokeConfirmModalComponent, {
      centered: true,
      size: 'lg',
    });
    modalRef.componentInstance.jokeId = this.jokeId;
  }
}
