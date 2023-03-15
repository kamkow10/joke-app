import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JokeDrawPageComponent } from './jokes/components/pages/joke-draw-page/joke-draw-page.component';
import { JokeComponent } from './jokes/components/elements/joke/joke.component';
import { MyJokesPageComponent } from './jokes/components/pages/my-jokes-page/my-jokes-page.component';
import { AddJokeDirective } from './jokes/directives/add-joke.directive';
import { JokeFormModalComponent } from './jokes/components/modals/joke-form-modal/joke-form-modal.component';
import { DeleteJokeDirective } from './jokes/directives/delete-joke.directive';
import { DeleteJokeConfirmModalComponent } from './jokes/components/modals/delete-joke-confirm-modal/delete-joke-confirm-modal.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AlertsComponent } from './shared/components/alerts/alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JokeDrawPageComponent,
    JokeComponent,
    MyJokesPageComponent,
    AddJokeDirective,
    JokeFormModalComponent,
    DeleteJokeDirective,
    DeleteJokeConfirmModalComponent,
    AlertsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
