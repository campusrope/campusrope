import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-topic-list",
  templateUrl: "./topic-list.component.html",
  styleUrls: ["./topic-list.component.scss"]
})
export class TopicListComponent implements OnInit {

  topics = [
    {
      id : 1,
      topic : "Topic 1"
    },
    {
      id : 2,
      topic : "Topic 2"
    },
    {
      id : 3,
      topic : "Topic 3"
    },
    {
      id : 4,
      topic : "Topic 4"
    },
    {
      id : 5,
      topic : "Topic 5"
    },
    {
      id : 6,
      topic : "Topic 6"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
