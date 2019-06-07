import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { RootPartialState } from './root.reducer';
import {
  LoadRoot,
  RootLoaded,
  RootLoadError,
  RootActionTypes
} from './root.actions';

@Injectable()
export class RootEffects {
  @Effect() loadRoot$ = this.dataPersistence.fetch(RootActionTypes.LoadRoot, {
    run: (action: LoadRoot, state: RootPartialState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return new RootLoaded([]);
    },

    onError: (action: LoadRoot, error) => {
      console.error('Error', error);
      return new RootLoadError(error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<RootPartialState>
  ) {}
}
