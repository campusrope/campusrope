import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../core/auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = fb.group({
      email: [
        "",
        Validators.compose(
          [
            Validators.required,
            Validators.email
          ]
        )
      ],
      password: [
        "",
        Validators.compose(
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(15)
          ]
        )
      ]
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

  onSubmit(values) {
    if (this.loginForm.invalid) { return; }
    this.authService.loginWithCredentials(values);
  }
}
