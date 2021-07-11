import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the request url
    let requestUrl: string = req.url;
    // if the request URL have the string prefix,
    // then make the replace by the correct url
    if (requestUrl.indexOf('/api/') !== -1) {
      requestUrl = `${environment.apiUrl}${requestUrl}`;
    }
    // clone the http request
    req = req.clone({
      url: requestUrl,
    });
    // move to next HttpClient request life cycle
    return next.handle(req);
  }
}
