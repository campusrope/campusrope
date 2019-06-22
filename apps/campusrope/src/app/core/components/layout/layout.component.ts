import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fadeRouter } from '@campusrope/shared';
import { LayoutState } from '@campusrope/state/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'campusrope-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [fadeRouter]
})
export class LayoutComponent implements OnInit {
  isMobile$: Observable<boolean>;
  showSidenav$: Observable<boolean>;

  constructor(private store: Store<LayoutState.State>) {}

  ngOnInit() {
    this.isMobile$ = this.store.select(LayoutState.getIsMobile);
    this.showSidenav$ = this.store.select(LayoutState.getShowSidenav);
  }

  toggleSidenav() {
    this.store.dispatch(new LayoutState.ToggleSidenav());
  }

  openedChangeSidenav(value: boolean) {
    this.store.dispatch(new LayoutState.SetSidenav(value));
  }
}
