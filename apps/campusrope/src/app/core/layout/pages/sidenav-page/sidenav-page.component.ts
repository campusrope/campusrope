import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AuthModalPageComponent } from '@campusrope/feature/auth';
import { User } from '@campusrope/models';
import { fadeInOut } from '@campusrope/shared';
import { AuthState } from '@campusrope/state/auth';
import { RootState } from '@campusrope/state/root';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav-page',
  templateUrl: './sidenav-page.component.html',
  styleUrls: ['./sidenav-page.component.scss'],
  animations: [fadeInOut],
})
export class SidenavPageComponent implements OnInit {
  ready$: Observable<boolean>;
  loading$: Observable<boolean>;
  user$: Observable<User>;

  get display$(): Observable<boolean> {
    return combineLatest(this.ready$, this.loading$).pipe(
      map(([ready, loading]) => ready && !loading),
    );
  }

  constructor(private store: Store<RootState.State>, private dialog: MatDialog) {}

  ngOnInit() {
    this.ready$ = this.store.select(AuthState.getReady);
    this.loading$ = this.store.select(RootState.getAuthenticatedUserLoading);
    this.user$ = this.store.select(RootState.getAuthenticatedUser);
  }

  authenticate() {
    this.dialog.open(AuthModalPageComponent);
  }

  singOut() {
    this.store.dispatch(new AuthState.SignOut());
  }
}
