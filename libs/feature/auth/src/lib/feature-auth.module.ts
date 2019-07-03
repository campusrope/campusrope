import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@campusrope/shared';
import { AuthModalPageComponent } from './pages';

@NgModule({
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  declarations: [AuthModalPageComponent],
  entryComponents: [AuthModalPageComponent],
})
export class FeatureAuthModule {}
