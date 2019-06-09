import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AuthDataProxy } from '@campusrope/models';
import { filterWith } from '@campusrope/shared';
import { RouterState } from '@campusrope/state/router';
import { User as FirebaseUser } from 'firebase';
import { ofAction } from 'ngrx-actions';
import { from } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { AuthIn, AuthOut, SignOut, SignOutSuccess } from './auth.actions';
import { State } from './auth.reducer';
import { getAuthenticated } from './auth.selectors';

@Injectable()
export class Effects {
  @Effect()
  auth$ = this.afa.authState.pipe(
    map((firebaseUser: FirebaseUser) => {
      if (!!firebaseUser) {
        const authState = AuthDataProxy.Create(firebaseUser.toJSON());
        return new AuthIn(authState);
      }
      return new AuthOut();
    }),
  );

  @Effect()
  signOut$ = this.actions$.pipe(
    ofAction(SignOut),
    filterWith(this.store.select(getAuthenticated), (authenticated: boolean) => authenticated),
    switchMap(() => from(this.afa.auth.signOut())),
    map(() => new SignOutSuccess()),
  );

  @Effect({ dispatch: false })
  redirectOnSingOutIfGuarded$ = this.actions$.pipe(
    ofAction(SignOutSuccess),
    filterWith(this.store.select(RouterState.getGuarded), (guarded: boolean) => guarded),
    tap(() => this.router.navigate(['/'])),
  );

  constructor(
    private actions$: Actions,
    private afa: AngularFireAuth,
    private router: Router,
    private store: Store<State | RouterState.State>,
  ) {}
}
