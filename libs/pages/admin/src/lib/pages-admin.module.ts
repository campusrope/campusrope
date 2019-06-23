import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListComponent } from './admin-list/admin-list.component';
import { RouterModule } from '@angular/router';
import { ADMIN_ROUTES } from './pages-admin.routes';

@NgModule({
  imports: [CommonModule,RouterModule.forChild(ADMIN_ROUTES)],
  declarations: [AdminListComponent],
  exports: [AdminListComponent],
  entryComponents: [AdminListComponent]
})
export class PagesAdminModule {}
