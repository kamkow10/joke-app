import { Injectable } from '@angular/core';
import {Alert} from "../models/alert.model";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private _alerts: Alert[] = [];

  showSuccess(text: string): void {
    this.alerts.push({
      title: 'Sukces',
      text: text,
      type: 'success'
    });
  }

  get alerts(): Alert[] {
    return this._alerts;
  }
}
