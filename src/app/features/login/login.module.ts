import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login.component';
import { LOGIN_ROUTES } from './login.routes';

@NgModule({
  imports: [
  CommonModule,
    SharedModule,
    RouterModule.forChild(LOGIN_ROUTES)
  ],
  declarations: [LoginComponent],
  exports: [],
  entryComponents: [LoginComponent]
})
export class LoginModule {}
