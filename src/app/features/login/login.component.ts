import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(fb: FormBuilder, private router: Router) {
    this.loginForm = fb.group({
      username: [
        "",
        Validators.compose(
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
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
    console.log(values);
  }
}
