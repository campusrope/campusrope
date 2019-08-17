import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LocationService } from "src/app/core/location/location.service";
import { TrendingNewsService } from "../trending-news.service";
import { StateConstantService } from "src/app/core/core.module";

@Component({
  selector: "app-trending-news-add",
  templateUrl: "./trending-news-add.component.html",
  styleUrls: ["./trending-news-add.component.scss"]
})
export class TrendingNewsAddComponent implements OnInit {

  formGroup: FormGroup;
  states: any = [];
  titleAlert = "This field is required";

  constructor(
    private locationService: LocationService,
    private formBuilder: FormBuilder,
    private trendingNewsService: TrendingNewsService,
    private stateConstantService: StateConstantService,
    private router: Router
  ) { }

  ngOnInit() {
    this.states = this.stateConstantService.getStates();
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
    const data = {
      id : this.trendingNewsService.getTrendingNewsList().length + 1,
      description : this.formGroup.value.headline,
      youtubeVideoUrl : this.formGroup.value.embedYoutubeVideo,
      videoId : this.getYoutubeId(),
      createdOn : `The Wire ${new Date().toString()}`
    };
    this.trendingNewsService.addTrendingNews(data);
    this.router.navigate(["admin", "trending-news"]);
  }

  getYoutubeId(): string {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = this.formGroup.value.embedYoutubeVideo.match(regExp);
    if (match && match[2].length === 11) {
      return match[2];
    }
  }

}
