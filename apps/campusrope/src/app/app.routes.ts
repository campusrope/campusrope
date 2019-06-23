import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./core').then(m => m.CoreModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('@campusrope/pages/login').then(m => m.PagesLoginModule)
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('@campusrope/pages/admin').then(m => m.PagesAdminModule)
  },
  {
    path: '**',
    component:NotFoundPageComponent
  }
];
