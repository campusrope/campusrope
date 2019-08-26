import { Routes } from "@angular/router";
import { AdminHelplineListComponent } from "./admin-helpline-list/admin-helpline-list.component";
import { HelplineEditComponent } from "../helpline/helpline-edit/helpline-edit.component";
import { HelplineAddComponent } from "../helpline/helpline-add/helpline-add.component";

export const ADMIN_HELPLINE_ROUTES: Routes = [
  { path: "", pathMatch: "full", component: AdminHelplineListComponent },
  { path: "add", component: HelplineAddComponent },
  { path: "edit/:id", component: HelplineEditComponent },
];
