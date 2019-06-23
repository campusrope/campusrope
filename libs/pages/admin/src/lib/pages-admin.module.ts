import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { RouterModule } from '@angular/router';
import { ADMIN_ROUTES } from './pages-admin.routes';

@NgModule({
  imports: [CommonModule,RouterModule.forChild(ADMIN_ROUTES)],
  declarations: [
    AdminListComponent,
    AdminAddComponent,
    AdminEditComponent
  ],
  exports: [AdminListComponent],
  entryComponents: [AdminListComponent]
})
export class PagesAdminModule {}
