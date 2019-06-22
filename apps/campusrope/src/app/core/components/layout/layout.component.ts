import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fadeRouter } from '@campusrope/shared';
import { LayoutState } from '@campusrope/state/layout';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

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
  currentRoutePosition:String;
  routeChangeCounter:number = 0;

  constructor(
    private store: Store<LayoutState.State>,
    private router: Router
  ) {}

  ngOnInit() {
    this.isMobile$ = this.store.select(LayoutState.getIsMobile);
    this.showSidenav$ = this.store.select(LayoutState.getShowSidenav);
  }

  get isDesktop$(){
    return this.isMobile$.pipe(map((value:boolean)=> !value))
  }

  toggleSidenav() {
    this.store.dispatch(new LayoutState.ToggleSidenav());
  }

  openedChangeSidenav(value: boolean) {
    this.store.dispatch(new LayoutState.SetSidenav(value));
  }

  navigateToDirection(direction:number) {
    this.routeChangeCounter = this.routeChangeCounter + direction;
    if (direction === -1 && 
        this.routeChangeCounter < 0) { 
          this.routeChangeCounter = this.routes.length - 1; 
    }
    if (direction === 1 && 
        !this.routes[this.routeChangeCounter]) { 
      this.routeChangeCounter = 0;
    }
    this.currentRoutePosition = this.routes[this.routeChangeCounter];
    this.router.navigate([this.currentRoutePosition]);
  }
}
