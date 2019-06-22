import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fadeRouter } from '@campusrope/shared';
import { LayoutState } from '@campusrope/state/layout';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'campusrope-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [fadeRouter]
})
export class LayoutComponent implements OnInit {
  isMobile$: Observable<boolean>;
  showSidenav$: Observable<boolean>;
  routes:String[] = ['','/helpline','/trending-news']

  constructor(
    private store: Store<LayoutState.State>,
    private router: Router
  ) {}

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

  rightChevClicked() {
    this.router.navigate(['/helpline']);
  }
}
