import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./core').then(m => m.CoreModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('@campusrope/pages/login').then(m => m.PagesLoginModule)
  }
];
