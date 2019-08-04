import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LocationService } from "src/app/core/location/location.service";

@Component({
  selector: "app-trending-news-add",
  templateUrl: "./trending-news-add.component.html",
  styleUrls: ["./trending-news-add.component.scss"]
})
export class TrendingNewsAddComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert = "This field is required";

  constructor(
    private locationService: LocationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      headline: [null, Validators.required],
      embedYoutubeVideo: [null, Validators.required],
      state: [null, Validators.required],
      searchClient: ""
    });
  }

  goBack(): any {
    this.locationService.goBack();
  }

  onTrendingNewsAdd(): any {
    if (!this.formGroup.valid) { return; }
    console.log(this.formGroup.value);
  }

}
