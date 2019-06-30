import { Routes } from '@angular/router';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';

export const ADMIN_ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: AdminListComponent },
  { path: 'add', component: AdminAddComponent },
  { path: 'edit/:id', component: AdminEditComponent },
];