import { Routes } from "@angular/router";
import { AdminHelplineListComponent } from "./admin-helpline-list/admin-helpline-list.component";

export const ADMIN_HELPLINE_ROUTES: Routes = [
  { path: "", pathMatch: "full", component: AdminHelplineListComponent }
];
