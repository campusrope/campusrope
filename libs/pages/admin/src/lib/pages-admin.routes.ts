import { Routes } from '@angular/router';
import { AdminListComponent } from './admin-list/admin-list.component';

export const ADMIN_ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: AdminListComponent }
];
