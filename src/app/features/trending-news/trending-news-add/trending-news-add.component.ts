import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LocationService } from "src/app/core/location/location.service";
import { TrendingNewsService } from "../trending-news.service";
import { StateConstantService } from "src/app/core/core.module";
import { Topic, TopicService } from "../topics/topic.service";
import { Observable } from "rxjs";
import { ManageClientService, Client } from "./manage-client/manage-client.service";

@Component({
  selector: "app-trending-news-add",
  templateUrl: "./trending-news-add.component.html",
  styleUrls: ["./trending-news-add.component.scss"]
})
export class TrendingNewsAddComponent implements OnInit {

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

  goBack(): any {
    this.locationService.goBack();
  }

  onTrendingNewsAdd(): any {
    if (!this.formGroup.valid) { return; }
    const data = {
      headline : this.formGroup.value.headline,
      youtubeUrl : this.formGroup.value.youtubeUrl,
      state : this.formGroup.value.state,
      topic : this.formGroup.value.topic,
      client : this.formGroup.value.client
    };
    this.trendingNewsService.addTrendingNews(data);
    this.router.navigate(["admin", "trending-news"]);
  }

}
