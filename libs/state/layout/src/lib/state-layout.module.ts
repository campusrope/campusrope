import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  LAYOUT_FEATURE_KEY,
  initialState as layoutInitialState,
  layoutReducer
} from './+state/layout.reducer';
import { LayoutEffects } from './+state/layout.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(LAYOUT_FEATURE_KEY, layoutReducer, {
      initialState: layoutInitialState
    }),
    EffectsModule.forFeature([LayoutEffects])
  ]
})
export class StateLayoutModule {}
