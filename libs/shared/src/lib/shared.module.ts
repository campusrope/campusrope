import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DropzoneDirective } from './directives/dropzone.directive';

@NgModule({
  imports: [CommonModule, HttpClientModule, InfiniteScrollModule],
  declarations: [DropzoneDirective],
  exports: [HttpClientModule, DropzoneDirective, InfiniteScrollModule],
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
