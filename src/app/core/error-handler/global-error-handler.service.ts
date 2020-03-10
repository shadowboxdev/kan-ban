import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { KbNotificationService } from '@common';

import { environment } from 'src/environments/environment';

/** Application-wide error handler that adds a UI notification to the error handling
 * provided by the default Angular ErrorHandler.
 */
@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  constructor(
    private readonly _notifications: KbNotificationService,
  ) {
    super();
  }

  public handleError(error: Error | HttpErrorResponse) {
    let displayMessage = 'An error occurred.';

    if (!environment.production) {
      displayMessage += ' See console for details.';
    }

    this._notifications.error(displayMessage);

    super.handleError(error);
  }
}
