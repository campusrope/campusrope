import { Injectable } from "@angular/core";

export interface Topic {
  id: number;
  topic: string;
}
@Injectable({
  providedIn: "root"
})
export class TopicService {

  topics: Topic[] = [
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

  getTopics(): Topic[] {
    return this.topics;
  }

  addTopic(topicData: Topic): void {
    this.topics.push(topicData);
  }

constructor() { }

}
