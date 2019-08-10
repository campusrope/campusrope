import { Routes } from "@angular/router";
import { HelplineListComponent } from "./helpline-list/helpline-list.component";
import { HelplineAddComponent } from "./helpline-add/helpline-add.component";
import { HelplineEditComponent } from "./helpline-edit/helpline-edit.component";

export const HELPLINE_ROUTES: Routes = [
  { path: "", pathMatch: "full", component: HelplineListComponent },
  { path: "add", component: HelplineAddComponent },
  { path: "edit/:id", component: HelplineEditComponent },
];
