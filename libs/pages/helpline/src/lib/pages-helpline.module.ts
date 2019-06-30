import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelplineListComponent } from './helpline-list/helpline-list.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '@campusrope/material';
import { HELPLINE_ROUTES } from './pages-helpline.routes';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild(HELPLINE_ROUTES)
  ],
  declarations: [HelplineListComponent],
  exports: [HelplineListComponent],
  entryComponents: [HelplineListComponent]
})
export class PagesHelplineModule {}
