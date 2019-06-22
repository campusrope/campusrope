import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { LOGIN_ROUTES } from './pages-login.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(LOGIN_ROUTES)],
  declarations: [LoginPageComponent],
  exports: [LoginPageComponent],
  entryComponents: [LoginPageComponent]
})
export class PagesLoginModule {}
