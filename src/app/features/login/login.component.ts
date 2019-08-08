import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  public errorMsg: String;
  loginForm: FormGroup;

  constructor(fb: FormBuilder, private router: Router) {
    this.loginForm = fb.group({
      username: [
        "",
        Validators.compose([Validators.required, Validators.minLength(4)])
      ],
      password: [
        "",
        Validators.compose([Validators.required, Validators.minLength(4)])
      ]
    });
  }

  onSubmit(values) {
    if (this.loginForm.invalid) { return; }
    console.log(values)
  }
}
