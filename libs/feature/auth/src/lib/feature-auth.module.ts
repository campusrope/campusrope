import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@campusrope/shared';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui/dist';
import { AuthModalPageComponent } from './pages';

@NgModule({
  imports: [CommonModule, SharedModule, ReactiveFormsModule, NgxAuthFirebaseUIModule],
  declarations: [AuthModalPageComponent],
  entryComponents: [AuthModalPageComponent],
})
export class FeatureAuthModule {}
