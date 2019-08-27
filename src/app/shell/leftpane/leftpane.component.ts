import { Component, OnInit } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";
import { StateConstantService } from "src/app/core/core.module";

@Component({
  selector: "app-leftpane",
  templateUrl: "./leftpane.component.html",
  styleUrls: ["./leftpane.component.scss"]
})
export class LeftpaneComponent implements OnInit {

  states = [];
  filterState: string;
  routerEvent: NavigationStart;

  constructor(private stateConstantService: StateConstantService,
              private router: Router) {

    }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.routerEvent = event;
      }
    });
    this.states = this.stateConstantService.getStates();
  }

  onSelectState(state) {
    // tslint:disable-next-line: no-shadowed-variable
    const selectedState = this.states.find((state) => state.selected);
    if (selectedState) { selectedState.selected = false; }
    state.selected = true;
  }
}
