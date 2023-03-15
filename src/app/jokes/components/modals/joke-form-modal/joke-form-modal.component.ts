import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {JokeService} from "../../../services/joke.service";
import {JokeCategory} from "../../../models/joke-category.model";
import {Joke} from "../../../models/joke.model";
import {RedirectService} from "../../../../core/services/redirect.service";
import {AlertService} from "../../../../core/services/alert.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-joke-form-modal',
  templateUrl: './joke-form-modal.component.html',
  styleUrls: ['./joke-form-modal.component.scss']
})
export class JokeFormModalComponent implements OnInit, OnDestroy {
  jokeForm!: FormGroup;
  categories: JokeCategory[] = [];
  private _getCategories!: Subscription;

  constructor(public modal: NgbActiveModal,
              private fb: FormBuilder,
              private jokeService: JokeService,
              private redirectService: RedirectService,
              private alertService: AlertService) {
    this.buildForm();
  }

  ngOnInit(): void {
    this._getCategories = this.jokeService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  ngOnDestroy(): void {
    this._getCategories.unsubscribe();
  }

  onSubmit(): void {
    this.jokeService.addJoke(this.category?.value, this.joke?.value).subscribe(() => {
      this.redirectService.forceRedirect('my-jokes');
      this.modal.close();
      this.alertService.showSuccess('Żart został pomyślnie dodany.');
    });
  }

  get category(): AbstractControl | null {
    return this.jokeForm.get('category');
  }

  get joke(): AbstractControl | null {
    return this.jokeForm.get('joke');
  }

  get shouldDisableForm(): boolean {
    return this.jokeForm.status === 'INVALID';
  }

  private buildForm(): void {
    this.jokeForm = this.fb.group({
      category: ['', [Validators.required]],
      joke: ['', [Validators.required]]
    });
  }
}
