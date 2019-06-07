import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  ROUTER_FEATURE_KEY,
  initialState as routerInitialState,
  routerReducer
} from './+state/router.reducer';
import { RouterEffects } from './+state/router.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(ROUTER_FEATURE_KEY, routerReducer, {
      initialState: routerInitialState
    }),
    EffectsModule.forFeature([RouterEffects])
  ]
})
export class StateRouterModule {}
