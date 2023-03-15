import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JokeDrawPageComponent} from "./jokes/components/pages/joke-draw-page/joke-draw-page.component";
import {MyJokesPageComponent} from "./jokes/components/pages/my-jokes-page/my-jokes-page.component";

const routes: Routes = [
  { path: 'joke-draw', component: JokeDrawPageComponent },
  { path: 'my-jokes', component: MyJokesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
