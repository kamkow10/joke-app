import { Component } from '@angular/core';
import {AlertService} from "../../../core/services/alert.service";

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent {

  constructor(public alertService: AlertService) {
  }
}
