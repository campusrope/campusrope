import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LocationService } from "src/app/core/location/location.service";
import { TrendingNewsService, TrendingNewsModel } from "../trending-news.service";
import { ActivatedRoute, Router } from "@angular/router";
import { StateConstantService } from "src/app/core/core.module";
import { Topic, TopicService } from "../topics/topic.service";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
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
    this.trendingNewsService.getTrendingNewsById(this.route.snapshot.params.id)
    .pipe( tap(trending => {
      this.setSelectedNewsData(trending);
    }));
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      headline: [null, Validators.required],
      youtubeUrl: [null, Validators.required],
      state: [null, Validators.required],
      topic: [null, Validators.required],
      client: [null, Validators.required]
    });
  }

  setSelectedNewsData(trending: TrendingNewsModel) {
    this.formGroup.patchValue({
      headline: trending.headline,
      youtubeUrl: trending.youtubeUrl,
      topic: trending.topic._id,
      client: trending.client._id,
      state: trending.state
    });
  }

  goBack(): any {
    this.locationService.goBack();
  }

  onTrendingNewsUpdate(): any {
    if (!this.formGroup.valid) { return; }
    const data = {
      _id : this.route.snapshot.params.id,
      headline : this.formGroup.value.headline,
      youtubeUrl : this.formGroup.value.youtubeUrl,
      state : this.formGroup.value.state,
      topic : this.formGroup.value.topic,
      client : this.formGroup.value.client
    };
    this.trendingNewsService.updateTrendingNews(data);
    this.router.navigate(["admin", "trending-news"]);
  }

}
