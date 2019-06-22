import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeCenterMenuComponent } from './components/home-center-menu/home-center-menu.component';

const CENTER_PANEL_ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: HomeCenterMenuComponent }
];

export const CORE_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LayoutComponent,
    children: CENTER_PANEL_ROUTES
  }
];
