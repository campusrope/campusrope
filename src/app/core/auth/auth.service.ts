import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";
import { map, tap, mergeMap } from "rxjs/operators";
import { AdminTaskService } from '../../features/admin-task/admin-task.service';

const USER_TOKEN = "USER_TOKEN";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private loggedUser = new BehaviorSubject({});
  public loggedUser$ = this.loggedUser.asObservable();

  constructor(
    private readonly httpClient: HttpClient,
    private adminTaskService: AdminTaskService
  ) {}

  requestGoogleRedirectUri(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/auth/google/uri`);
  }

  googleSignIn(code: string): Observable<any> {
    return this.httpClient.post("api/auth/google/signin", { code });
  }

  getToken(): string {
    try {
      return localStorage.getItem(USER_TOKEN);
    } catch (e) {
      return null;
    }
  }

  setToken(token: string) {
    localStorage.setItem(USER_TOKEN, token);
  }

  loginWithCredentials(credentials: { email: string; password: string }) {
    this.httpClient
      .post("api/auth/local", {
        identifier: credentials.email,
        password: credentials.password
      })
      .pipe(
        tap((res: any) => {
          this.setToken(res.jwt);
          this.loggedUser.next(res.user);
        }),
        mergeMap(res => this.adminTaskService.fetchAdminTasks(res.user._id))
      )
      .subscribe();
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
