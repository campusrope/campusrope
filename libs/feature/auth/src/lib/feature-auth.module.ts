import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@campusrope/shared';
import { AngularMaterialModule } from '@campusrope/material';
import { AuthModalPageComponent } from './pages';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  declarations: [AuthModalPageComponent],
  entryComponents: [AuthModalPageComponent]
})
export class FeatureAuthModule {}
