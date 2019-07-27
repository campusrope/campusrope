import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private readonly httpClient: HttpClient) {}

  requestGoogleRedirectUri(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/auth/google/uri`);
  }

  googleSignIn(code: string): Observable<any> {
    return this.httpClient.post("api/auth/google/signin", { code });
  }

  getToken(): string {
    try {
      return localStorage.getItem("token");
    } catch (e) {
      return null;
    }
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
