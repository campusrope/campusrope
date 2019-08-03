import { Component, OnInit } from "@angular/core";
import { LocationService } from "src/app/core/location/location.service";

@Component({
  selector: "app-helpline-add",
  templateUrl: "./helpline-add.component.html",
  styleUrls: ["./helpline-add.component.scss"]
})
export class HelplineAddComponent implements OnInit {

  constructor(
    private locationService: LocationService
  ) { }

  ngOnInit() {
  }

  goBack(): any {
    this.locationService.goBack();
  }
}
