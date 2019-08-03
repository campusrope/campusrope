import { Component, OnInit } from "@angular/core";
import { LocationService } from "src/app/core/location/location.service";

@Component({
  selector: "app-trending-news-add",
  templateUrl: "./trending-news-add.component.html",
  styleUrls: ["./trending-news-add.component.scss"]
})
export class TrendingNewsAddComponent implements OnInit {

  constructor(
    private locationService: LocationService
  ) { }

  ngOnInit() {
  }

  goBack(): any {
    this.locationService.goBack();
  }

}
