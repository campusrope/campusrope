import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelplineListComponent } from './helpline-list/helpline-list.component';
import { RouterModule } from '@angular/router';
import { HELPLINE_ROUTES } from './helpline.routes';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(HELPLINE_ROUTES)
  ],
  declarations: [HelplineListComponent],
  exports: [],
  entryComponents: [HelplineListComponent]
})
export class HelplineModule {}
