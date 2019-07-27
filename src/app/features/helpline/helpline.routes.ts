import { Routes } from "@angular/router";
import { HelplineListComponent } from "./helpline-list/helpline-list.component";

export const HELPLINE_ROUTES: Routes = [
  { path: "", pathMatch: "full", component: HelplineListComponent }
];
