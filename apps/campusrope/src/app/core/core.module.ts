import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureAuthModule } from '@campusrope/feature/auth';
import { AngularMaterialModule } from '@campusrope/material';
import { SharedModule } from '@campusrope/shared';
import { LayoutComponent, NavbarComponent, UserSidenavCardComponent,LeftPaneComponent,RightPaneComponent } from './layout/components';
import { LayoutPageComponent, SidenavPageComponent } from './layout/pages';

@NgModule({
  imports: [CommonModule, SharedModule, FeatureAuthModule, RouterModule, AngularMaterialModule],
  declarations: [
    LayoutComponent,
    LayoutPageComponent,
    NavbarComponent,
    UserSidenavCardComponent,
    LeftPaneComponent,
    RightPaneComponent,
    SidenavPageComponent,
  ],
  exports: [LayoutPageComponent],
})
export class CoreModule {}
