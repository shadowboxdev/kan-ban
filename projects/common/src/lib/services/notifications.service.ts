import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable()
export class KbNotificationService {
  private _baseDuration: number = 2000;

  constructor(private readonly _snackBar: MatSnackBar, private readonly _ngZone: NgZone) {}

  public default(message: string) {
    this.show(message, {
      duration: this._baseDuration,
      panelClass: 'default-notification-overlay'
    });
  }

  public info(message: string) {
    this.show(message, {
      duration: this._baseDuration,
      panelClass: 'info-notification-overlay'
    });
  }

  public success(message: string) {
    this.show(message, {
      duration: this._baseDuration,
      panelClass: 'success-notification-overlay'
    });
  }

  public warn(message: string) {
    this.show(message, {
      duration: this._baseDuration + 500,
      panelClass: 'warning-notification-overlay'
    });
  }

  public error(message: string) {
    this.show(message, {
      duration: this._baseDuration + 1000,
      panelClass: 'error-notification-overlay'
    });
  }

  private show(message: string, configuration: MatSnackBarConfig) {
    // Need to open snackBar from Angular zone to prevent issues with its position per
    // https://stackoverflow.com/questions/50101912/snackbar-position-wrong-when-use-errorhandler-in-angular-5-and-material
    this._ngZone.run(() => this._snackBar.open(message, null, configuration));
  }
}
