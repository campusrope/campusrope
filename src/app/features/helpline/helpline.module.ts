import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HelplineListComponent } from "./helpline-list/helpline-list.component";
import { RouterModule } from "@angular/router";
import { HELPLINE_ROUTES } from "./helpline.routes";
import { SharedModule } from "src/app/shared/shared.module";
import { HelplineAddComponent } from "./helpline-add/helpline-add.component";

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(HELPLINE_ROUTES)],
  declarations: [
    HelplineListComponent,
    HelplineAddComponent
  ],
  exports: [],
  entryComponents: [HelplineListComponent]
})
export class HelplineModule {}
