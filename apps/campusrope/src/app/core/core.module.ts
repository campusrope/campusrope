import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureAuthModule } from '@campusrope/feature/auth';
import { AngularMaterialModule } from '@campusrope/material';
import { SharedModule } from '@campusrope/shared';
import { LayoutComponent } from './components/layout/layout.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { LeftPaneComponent } from './components/left-pane/left-pane.component';
import { RightPaneComponent } from './components/right-pane/right-pane.component';
import { HomeCenterMenuComponent } from './components/home-center-menu/home-center-menu.component';
import { CORE_ROUTES } from './core.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FeatureAuthModule,
    RouterModule.forChild(CORE_ROUTES),
    AngularMaterialModule
  ],

  declarations: [
    LayoutComponent,
    DrawerComponent,
    LeftPaneComponent,
    RightPaneComponent,
    HomeCenterMenuComponent
  ],
  exports: [LayoutComponent]
})
export class CoreModule {}
