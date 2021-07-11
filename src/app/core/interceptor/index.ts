import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './error.interceptor';
import { ApiInterceptor } from './api.interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  /**
   * Order matters: Since interceptors pass request through in the order they're provided,
   * (requests will flow in A->B->C and responses will flow out C->B->A)
   */

  { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];
