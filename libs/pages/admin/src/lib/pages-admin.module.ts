import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '@campusrope/material';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { ADMIN_ROUTES } from './pages-admin.routes';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild(ADMIN_ROUTES)
  ],
  declarations: [
    AdminListComponent,
    AdminAddComponent,
    AdminEditComponent
  ],
  exports: [AdminListComponent],
  entryComponents: [AdminListComponent]
})
export class PagesAdminModule {}
