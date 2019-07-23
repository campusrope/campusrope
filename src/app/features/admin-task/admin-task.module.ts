import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ADMIN_TASK_ROUTES } from './admin-task.routes';
import { AdminTaskListComponent } from './admin-task-list/admin-task-list.component';
import { AdminTaskAddComponent } from './admin-task-add/admin-task-add.component';
import { AdminTaskEditComponent } from './admin-task-edit/admin-task-edit.component';
import { LocationService } from 'src/app/core/location/location.service';
import { AdminTaskService } from './admin-task.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(ADMIN_TASK_ROUTES)
  ],
  declarations: [
    AdminTaskListComponent,
    AdminTaskAddComponent,
    AdminTaskEditComponent
  ],
  providers : [
    LocationService,
    AdminTaskService
  ],
})
export class AdminTaskModule {}
