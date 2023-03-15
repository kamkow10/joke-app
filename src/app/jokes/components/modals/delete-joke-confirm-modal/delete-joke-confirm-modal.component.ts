import {Component, Input} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {RedirectService} from "../../../../core/services/redirect.service";
import {JokeService} from "../../../services/joke.service";
import {AlertService} from "../../../../core/services/alert.service";

@Component({
  selector: 'app-delete-joke-confirm-modal',
  templateUrl: './delete-joke-confirm-modal.component.html',
  styleUrls: ['./delete-joke-confirm-modal.component.scss']
})
export class DeleteJokeConfirmModalComponent {
  @Input() jokeId!: string;

  constructor(public modal: NgbActiveModal,
              private redirectService: RedirectService,
              private jokeService: JokeService,
              private alertService: AlertService) {
  }

  deleteJoke(): void {
    this.jokeService.deleteJoke(this.jokeId).subscribe(() => {
      this.redirectService.forceRedirect('my-jokes');
      this.modal.close();
      this.alertService.showSuccess('Żart został pomyślnie usunięty.');
    });
  }
}
