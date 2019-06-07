import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { RouterPartialState } from './router.reducer';
import {
  LoadRouter,
  RouterLoaded,
  RouterLoadError,
  RouterActionTypes
} from './router.actions';

@Injectable()
export class RouterEffects {
  @Effect() loadRouter$ = this.dataPersistence.fetch(
    RouterActionTypes.LoadRouter,
    {
      run: (action: LoadRouter, state: RouterPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new RouterLoaded([]);
      },

      onError: (action: LoadRouter, error) => {
        console.error('Error', error);
        return new RouterLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<RouterPartialState>
  ) {}
}
