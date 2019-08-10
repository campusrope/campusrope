import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LocationService } from "src/app/core/location/location.service";
import { TrendingNewsService } from "../trending-news.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-trending-news-edit",
  templateUrl: "./trending-news-edit.component.html",
  styleUrls: ["./trending-news-edit.component.scss"]
})
export class TrendingNewsEditComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert = "This field is required";
  selectedNewsData: any;

  constructor(
    private locationService: LocationService,
    private formBuilder: FormBuilder,
    private trendingNewsService: TrendingNewsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.createForm();
    this.route.params.subscribe(params => {
      this.selectedNewsData = this.trendingNewsService.getTrendingNewsById(+params.id);
      this.setSelectedNewsData();
    });
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      headline: [null, Validators.required],
      embedYoutubeVideo: [null, Validators.required],
      state: [null, Validators.required],
      searchClient: ""
    });
  }

  setSelectedNewsData() {
    this.formGroup.patchValue({
      headline: this.selectedNewsData.description
    });
  }

  goBack(): any {
    this.locationService.goBack();
  }

  onTrendingNewsUpdate(): any {
    if (!this.formGroup.valid) { return; }
    const data = {
      id : this.selectedNewsData.id,
      description : this.formGroup.value.headline,
      createdOn : `The Wire ${new Date().toString()}`
    };
    this.trendingNewsService.updateTrendingNews(data);
    this.locationService.goToPath(`/trending-news`);
  }

}
