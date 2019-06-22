import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Store } from '@ngrx/store';
import { LayoutState } from '@campusrope/state/layout';
@Component({
  selector: 'campusrope-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppbarComponent implements OnInit {
  constructor(private store: Store<LayoutState.State>) {}

  ngOnInit() {}

  toggleSidenav() {
    this.store.dispatch(new LayoutState.ToggleSidenav());
  }
}
