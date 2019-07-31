import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
import { AppState } from "../../state/core.state";
import { getIsMobile, getShowSidenav, SetSidenav } from "../../state";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  isMobile$: Observable<boolean>;
  showSidenav$: Observable<boolean>;
  routes: string[] = ["", "/helpline", "/trending-news"];
  currentRoutePosition: string;
  routeChangeCounter = 0;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.isMobile$ = this.store.pipe(select(getIsMobile));
    this.showSidenav$ = this.store.pipe(select(getShowSidenav));
  }

  get isDesktop$() {
    return this.isMobile$.pipe(map((value: boolean) => !value));
  }

  navigateToDirection(direction: number) {
    this.routeChangeCounter = this.routeChangeCounter + direction;
    if (direction === -1 && this.routeChangeCounter < 0) {
      this.routeChangeCounter = this.routes.length - 1;
    }
    if (direction === 1 && !this.routes[this.routeChangeCounter]) {
      this.routeChangeCounter = 0;
    }
    this.currentRoutePosition = this.routes[this.routeChangeCounter];
    this.router.navigate([this.currentRoutePosition]);
  }

  openedChangeSidenav(value: boolean) {
    this.store.dispatch(new SetSidenav(value));
  }
}
