import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, RouterNavigatedAction } from '@ngrx/router-store';
import { Action } from '@ngrx/store';
import { RouterState } from '@campusrope/state/router';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class SelectEffects {
  @Effect()
  navigated$ = this.actions$.pipe(
    ofType<RouterNavigatedAction<RouterState.UrlSnapshot>>(ROUTER_NAVIGATED),
    map(action => this.getSelectAction(action)),
    filter(action => !!action)
  );

  constructor(private actions$: Actions) {}

  getSelectAction(
    action: RouterNavigatedAction<RouterState.UrlSnapshot>
  ): Action {
    const navigation = action.payload.routerState.url.split('/')[1];
    const id = action.payload.routerState.params['id'];
    if (!id) {
      return null;
    }
    return null;
  }
}
