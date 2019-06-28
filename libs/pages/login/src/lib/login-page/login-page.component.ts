import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthModalPageComponent } from '@campusrope/feature/auth';

@Component({
  selector: 'campusrope-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  authenticate(){
    this.dialog.open(AuthModalPageComponent);
  }
}
