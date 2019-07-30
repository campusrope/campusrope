import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { ToggleSidenav } from "src/app/core/layout/layout.actions";
import { LocationService } from "../../core/location/location.service";
import { Observable } from "rxjs";
import { selectIsAuthenticated } from "src/app/core/core.module";
import { AppState } from "../../core/core.state";

@Component({
  selector: "app-appbar",
  templateUrl: "./appbar.component.html",
  styleUrls: ["./appbar.component.scss"]
})
export class AppbarComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;
  constructor(
    private store: Store<AppState>,
    private locationService: LocationService
  ) {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }

  ngOnInit() {}

  toggleSidenav() {
    this.store.dispatch(new ToggleSidenav());
  }

  goBack() {
    this.locationService.goBack();
  }
}
