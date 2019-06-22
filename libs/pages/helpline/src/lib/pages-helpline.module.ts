import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelplineListComponent } from './helpline-list/helpline-list.component';
import { RouterModule } from '@angular/router';
import { HELPLINE_ROUTES } from './pages-helpline.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(HELPLINE_ROUTES)],
  declarations: [HelplineListComponent],
  exports: [HelplineListComponent],
  entryComponents: [HelplineListComponent]
})
export class PagesHelplineModule {}
