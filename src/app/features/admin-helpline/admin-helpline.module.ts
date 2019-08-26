import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AdminHelplineListComponent } from "./admin-helpline-list/admin-helpline-list.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ADMIN_HELPLINE_ROUTES } from "./admin-helpline.routes";
import { LinksDialogModalComponent } from "../helpline/links-dialog-modal/links-dialog-modal.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ADMIN_HELPLINE_ROUTES)],
  declarations: [
    AdminHelplineListComponent
  ],
  entryComponents: [AdminHelplineListComponent, LinksDialogModalComponent]
})
export class AdminHelplineModule { }
