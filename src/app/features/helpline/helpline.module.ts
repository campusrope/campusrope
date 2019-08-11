import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HelplineListComponent } from "./helpline-list/helpline-list.component";
import { RouterModule } from "@angular/router";
import { HELPLINE_ROUTES } from "./helpline.routes";
import { SharedModule } from "src/app/shared/shared.module";
import { HelplineAddComponent } from "./helpline-add/helpline-add.component";
import { HelplineService } from "./helpline.service";
import { HelplineEditComponent } from "./helpline-edit/helpline-edit.component";
import { LinksDialogModalComponent } from "./links-dialog-modal/links-dialog-modal.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(HELPLINE_ROUTES)],
  declarations: [
    HelplineListComponent,
    HelplineAddComponent,
    HelplineEditComponent,
    LinksDialogModalComponent
  ],
  providers: [
    HelplineService
  ],
  exports: [],
  entryComponents: [HelplineListComponent, LinksDialogModalComponent]
})
export class HelplineModule {}
