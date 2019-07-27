import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AuthService } from "src/app/core/auth/auth.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private dialog: MatDialog, private authService: AuthService) {}

  ngOnInit() {}

  getGoogleUri() {
    this.authService.requestGoogleRedirectUri().subscribe((res: any) => {
      window.location = res.redirect_uri;
    });
  }
}
