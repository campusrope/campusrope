import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  ROOT_FEATURE_KEY,
  initialState as rootInitialState,
  rootReducer
} from './+state/root.reducer';
import { RootEffects } from './+state/root.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(ROOT_FEATURE_KEY, rootReducer, {
      initialState: rootInitialState
    }),
    EffectsModule.forFeature([RootEffects])
  ]
})
export class StateRootModule {}
