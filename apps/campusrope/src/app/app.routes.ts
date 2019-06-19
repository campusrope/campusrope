import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

export const APP_ROUTES: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'login',
    loadChildren: () =>
      import('@campusrope/pages/login').then(m => m.PagesLoginModule),
  },
];
