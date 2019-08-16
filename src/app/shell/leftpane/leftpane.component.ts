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
}
