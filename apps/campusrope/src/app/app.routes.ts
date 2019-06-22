import { Routes } from '@angular/router';
import { LayoutComponent } from './core';

export const APP_ROUTES: Routes = [
  { path: '', component: LayoutComponent },
  {
    path: 'login',
    loadChildren: () =>
      import('@campusrope/pages/login')
      
  .then(m => m.PagesLoginModule)
  },
];
