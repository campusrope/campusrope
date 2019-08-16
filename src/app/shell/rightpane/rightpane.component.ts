import { Component, OnInit } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";
import { TopicService, Topic } from "src/app/features/trending-news/topics/topic.service";

@Component({
  selector: "app-rightpane",
  templateUrl: "./rightpane.component.html",
  styleUrls: ["./rightpane.component.scss"]
})
export class RightpaneComponent implements OnInit {

  topics: Topic[];
  routerEvent: NavigationStart;

  constructor(private topicService: TopicService,
              private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.routerEvent = event;
      }
    });
    this.topics = this.topicService.getTopics();
  }
}
