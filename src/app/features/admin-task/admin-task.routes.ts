import { Routes } from "@angular/router";
import { AdminTaskListComponent } from "./admin-task-list/admin-task-list.component";
import { AdminTaskAddComponent } from "./admin-task-add/admin-task-add.component";
import { AdminTaskEditComponent } from "./admin-task-edit/admin-task-edit.component";

export const ADMIN_TASK_ROUTES: Routes = [
  { path: "", pathMatch: "full", component: AdminTaskListComponent },
  { path: "add", component: AdminTaskAddComponent },
  { path: "edit/:id", component: AdminTaskEditComponent }
];
