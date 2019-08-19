import { Component, OnInit } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";
import { TopicService, Topic } from "src/app/features/trending-news/topics/topic.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-rightpane",
  templateUrl: "./rightpane.component.html",
  styleUrls: ["./rightpane.component.scss"]
})
export class RightpaneComponent implements OnInit {

  topicList$: Observable<Topic[]>;
  routerEvent: NavigationStart;

  constructor(private topicService: TopicService,
              private router: Router) {
    this.topicList$ = this.topicService.topicList$;
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.routerEvent = event;
      }
    });
    this.topicService.getTopics();
  }
}
