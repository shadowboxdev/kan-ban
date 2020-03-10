import { ErrorHandler } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { GlobalErrorHandler } from './global-error-handler.service';
import { HttpErrorInterceptor } from './http-error.interceptor';

export const ErrorHanderProviders = [
  { provide: ErrorHandler, useClass: GlobalErrorHandler },
  { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
];
