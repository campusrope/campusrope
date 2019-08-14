import { Component, OnInit } from "@angular/core";
import { StateConstantService } from "src/app/core/core.module";

@Component({
  selector: "app-leftpane",
  templateUrl: "./leftpane.component.html",
  styleUrls: ["./leftpane.component.scss"]
})
export class LeftpaneComponent implements OnInit {

  states = [];

  constructor(private stateConstantService: StateConstantService) {}

  ngOnInit() {
    this.states = this.stateConstantService.getStates();
  }
}
