import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";

export interface Topic {
  _id?: string;
  name: string;
}
@Injectable({
  providedIn: "root"
})
export class TopicService {
  private readonly topicListSubject$ = new BehaviorSubject<Topic[]>([]);

  public topicList$: Observable<Topic[]> = this.topicListSubject$.asObservable();

  constructor(private http: HttpClient) { }

  getTopics() {
    this.http.get("api/topics").subscribe((res: any) => {
      this.topicListSubject$.next(res);
    });
  }

  addTopic(topicData: Topic): void {
    this.http.post(`api/topics`, topicData).subscribe((res: any) => {
      const topics = this.topicListSubject$
      .getValue()
      .concat([res])
      .slice();
      this.topicListSubject$.next(topics);
    });
  }

}
