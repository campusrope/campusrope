import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { State } from "../../core/layout/layout.model";
import {
  getIsMobile,
  getShowSidenav
} from "../../core/layout/layout.selectors";
import { map } from "rxjs/operators";
import { SetSidenav } from "../../core/layout/layout.actions";
import { Router } from "@angular/router";

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
  routeChangeCounter: number = 0;

  constructor(private store: Store<State>, private router: Router) {}

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
