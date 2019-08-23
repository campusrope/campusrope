import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LocationService } from "src/app/core/location/location.service";
import { TrendingNewsService } from "../trending-news.service";
import { ActivatedRoute, Router } from "@angular/router";
import { StateConstantService } from "src/app/core/core.module";
import { Topic, TopicService } from "../topics/topic.service";
import { Observable } from "rxjs";
import { Client, ManageClientService } from "../trending-news-add/manage-client/manage-client.service";

@Component({
  selector: "app-trending-news-edit",
  templateUrl: "./trending-news-edit.component.html",
  styleUrls: ["./trending-news-edit.component.scss"]
})
export class TrendingNewsEditComponent implements OnInit {

  formGroup: FormGroup;
  states: any = [];
  topicList$: Observable<Topic[]>;
  clientList$: Observable<Client[]>;
  titleAlert = "This field is required";
  selectedNewsData: any;

  constructor(
    private locationService: LocationService,
    private formBuilder: FormBuilder,
    private trendingNewsService: TrendingNewsService,
    private stateConstantService: StateConstantService,
    private topicService: TopicService,
    private manageClientService: ManageClientService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.topicList$ = this.topicService.topicList$;
    this.clientList$ = this.manageClientService.manageClientList$;
  }

  ngOnInit() {
    this.states = this.stateConstantService.getStates();
    this.topicService.getTopics();
    this.manageClientService.getClients();
    this.createForm();
    this.route.params.subscribe(params => {
      this.selectedNewsData = this.trendingNewsService.getTrendingNewsById(params.id);
      this.setSelectedNewsData();
    });
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      headline: [null, Validators.required],
      embedYoutubeVideo: [null, Validators.required],
      state: [null, Validators.required],
      topic: [null, Validators.required],
      searchClient: [null, Validators.required]
    });
  }

  setSelectedNewsData() {
    this.formGroup.patchValue({
      headline: this.selectedNewsData.description,
      embedYoutubeVideo: this.selectedNewsData.youtubeVideoUrl,
      topic: this.selectedNewsData.topic
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
      youtubeVideoUrl : this.formGroup.value.embedYoutubeVideo,
      videoId : this.getYoutubeId(),
      topic : this.formGroup.value.topic,
      createdOn : `The Wire ${new Date().toString()}`
    };
    // this.trendingNewsService.updateTrendingNews(data);
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
