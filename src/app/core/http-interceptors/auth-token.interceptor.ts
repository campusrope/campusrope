import { Injectable, Inject } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders
} from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    let changedRequest;
      // HttpHeader object immutable - copy values
    const headerSettings: {[name: string]: string | string[]; } = {};

    for (const key of request.headers.keys()) {
        headerSettings[key] = request.headers.getAll(key);
      }
    if (token) {
        headerSettings["Authorization"] = "Bearer " + token;
      }
    headerSettings["Content-Type"] = "application/json";
    const newHeader = new HttpHeaders(headerSettings);

    changedRequest = request.clone({
        headers: newHeader});
    return next.handle(changedRequest);
  }
}
