import { Injectable } from "@angular/core";
import { Location } from "@angular/common";

@Injectable({
  providedIn: "root"
})
export class LocationService {
  location: Location;

  constructor(location: Location) {
    this.location = location;
  }

  goBack() {
    this.location.back();
  }
}
