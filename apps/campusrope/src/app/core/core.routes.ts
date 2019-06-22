import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeCenterMenuComponent } from './components/home-center-menu/home-center-menu.component';

const CENTER_PANEL_ROUTES: Routes = [
  { path: '', component: HomeCenterMenuComponent },
  {
    path: 'helpline',
    loadChildren: () =>
      import('@campusrope/pages/helpline').then(m => m.PagesHelplineModule)
  }
];

export const CORE_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: CENTER_PANEL_ROUTES
  }
];
