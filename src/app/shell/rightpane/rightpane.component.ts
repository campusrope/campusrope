import { Component, OnInit } from "@angular/core";
import { TopicService, Topic } from "src/app/features/trending-news/topics/topic.service";

@Component({
  selector: "app-rightpane",
  templateUrl: "./rightpane.component.html",
  styleUrls: ["./rightpane.component.scss"]
})
export class RightpaneComponent implements OnInit {

  topics: Topic[];

  constructor(private topicService: TopicService) { }

  ngOnInit() {
    this.topics = this.topicService.getTopics();
  }
}
