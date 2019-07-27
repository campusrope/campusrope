import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { LayoutState } from "../../core/layout/layout.model";
import { ToggleSidenav } from "src/app/core/layout/layout.actions";
import { LocationService } from "../../core/location/location.service";

@Component({
  selector: "app-appbar",
  templateUrl: "./appbar.component.html",
  styleUrls: ["./appbar.component.scss"]
})
export class AppbarComponent implements OnInit {
  constructor(
    private store: Store<LayoutState>,
    private locationService: LocationService
  ) {}

  ngOnInit() {}

  toggleSidenav() {
    this.store.dispatch(new ToggleSidenav());
  }

  goBack() {
    this.locationService.goBack();
  }
}
