import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { ROUTER_NAVIGATION } from "@ngrx/router-store";
import { select, Store } from "@ngrx/store";
import { filterWith } from "../../core/rxjs-utils";
import { defer, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { SetIsMobile, SetSidenav } from "./layout.actions";
import { LayoutState } from "./layout.model";
import { getIsMobile } from "./layout.selectors";

@Injectable()
export class LayoutEffects {
  isMobile$: Observable<boolean> = this.store.pipe(select(getIsMobile));

  @Effect()
  setIsMobile$ = defer(() =>
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .pipe(
        map(result => result.matches),
        map(isMobile => new SetIsMobile(isMobile))
      )
  );

  @Effect()
  closeSidenavOnNavigationIfMobile$ = this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    filterWith(this.isMobile$, (isMobile: boolean) => isMobile),
    map(() => new SetSidenav(false))
  );

  constructor(
    private actions$: Actions,
    private store: Store<LayoutState>,
    private breakpointObserver: BreakpointObserver
  ) {}
}
