import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

import { Alert, AlertType } from '../../_models/alert';
import { AlertService } from '../../_services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() id = 'default-alert';
  @Input() fade = true;

  alerts: Alert[] = [];
  alertSubscription: Subscription;
  routerSubscription: Subscription;

  constructor(private router: Router, private alertService: AlertService) {}

  ngOnInit() {
    this.alertSubscription = this.alertService
      .onAlert(this.id)
      .subscribe((alert) => {
        //clear alerts whrn empty alert received
        if (!alert.message) {
          //clear alerts without the flag keepAfterRouteChange
          this.alerts = this.alerts.filter((x) => x.keepAfterRouteChange);
          // remove keepAfterRouteChange flag
          this.alerts.forEach((x) => delete x.keepAfterRouteChange);
          return;
        }
        //add alert to array
        this.alerts.push(alert);

        //autoclose alert if required
        if (alert.autoclose) {
          setTimeout(() => this.removeAlert(alert), 3000);
        }
      });
  }

  ngOnDestroy() {
    // unsubscribe to avoid memory leaks
    this.alertSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }

  removeAlert(alert: Alert) {
    if (!this.alerts.includes(alert)) return;

    if (this.fade) {
      this.alerts.find((x) => x == alert).fade = true;

      setTimeout(() => {
        this.alerts = this.alerts.filter((x) => x !== alert);
      }, 250);
    } else {
      this.alerts = this.alerts.filter((x) => x !== alert);
    }
  }

  cssClass(alert: Alert) {
    if (!alert) return;

    const classes = ['alert', 'alert-dismissable', 'mt-4', 'container'];

    const alertTypeClass = {
      [AlertType.Success]: 'alert alert-success',
      [AlertType.Error]: 'alert alert-danger',
      [AlertType.Info]: 'alert alert-info',
      [AlertType.Warning]: 'alert alert-warning',
    };

    classes.push(alertTypeClass[alert.type]);

    if (alert.fade) {
      classes.push('fade');
    }

    return classes.join(' ');
  }
}
