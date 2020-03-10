import { Injectable, Injector, ErrorHandler } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/** Passes HttpErrorResponse to application-wide error handler */
@Injectable()
export class HttpErrorInterceptor<T, U> implements HttpInterceptor {
  constructor(private readonly _injector: Injector) {}

  public intercept(request: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<U>> {
    return next.handle(request).pipe(
      tap({
        next: null,
        error: (err: HttpErrorResponse) => {
          if (err instanceof HttpErrorResponse) {
            const appErrorHandler = this._injector.get(ErrorHandler);
            appErrorHandler.handleError(err);
          }
        }
      })
    );
  }
}
