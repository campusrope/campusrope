import { Routes } from '@angular/router';
import { HomeCenterMenuComponent } from './components/home-center-menu/home-center-menu.component';

export const CORE_ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: HomeCenterMenuComponent,}
];
