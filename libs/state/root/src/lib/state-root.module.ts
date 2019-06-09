import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StateAuthModule } from '@campusrope/state/auth';
import { StateLayoutModule } from '@campusrope/state/layout';
import { StateRouterModule } from '@campusrope/state/router';
import { reducerProvider, reducerToken } from './+state/root.reducer';
import { SelectEffects } from './+state/root.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducerToken),
    EffectsModule.forRoot([SelectEffects]),
    StateAuthModule,
    StateRouterModule,
    StateLayoutModule,
  ],
  providers: [reducerProvider],
})
export class StateRootModule {}
