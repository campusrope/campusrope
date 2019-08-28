import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { Topic } from "./topics/topic.service";
import { Client } from "./trending-news-add/manage-client/manage-client.service";
import { tap } from "rxjs/operators";

export interface TrendingNews {
  _id?: string;
  headline: string;
  youtubeUrl: string;
  state: string;
  topic: string;
  client: string;
}

export interface TrendingNewsModel {
  _id: string;
  headline: string;
  youtubeUrl: string;
  state: string;
  topic: Topic;
  videoId?: string;
  client: Client;
  createdAt: string;
}

@Injectable({
  providedIn: "root"
})
export class TrendingNewsService {

  private readonly trendingNewsListSubject$ = new BehaviorSubject<TrendingNewsModel[]>([]);
  private readonly selectedTrendingNewsSubject$ = new BehaviorSubject<TrendingNewsModel>(null);

  public trendingNewsList$: Observable<TrendingNewsModel[]> = this.trendingNewsListSubject$.asObservable();

  public selectedTrendingNews$: Observable<TrendingNewsModel> = this.selectedTrendingNewsSubject$.asObservable();

  constructor(private http: HttpClient) {}

  getTrendingNewsList() {
    this.http.get("api/trendings").subscribe((res: any) => {
      res.forEach(trending => {
        trending.videoId = this.getYoutubeId(trending.youtubeUrl);
      });
      this.trendingNewsListSubject$.next(res);
    });
  }

  addTrendingNews(trendingNewsData: TrendingNews) {
    this.http.post(`api/trendings`, trendingNewsData).subscribe((res: any) => {
      const trendingNewsList = this.trendingNewsListSubject$
      .getValue()
      .concat([res]);
      this.trendingNewsListSubject$.next(trendingNewsList);
    });
  }

  deleteTrendingNews(id: string) {
    this.http.delete(`api/trendings/${id}`).subscribe((res: any) => {
      const filteredTrendings = this.trendingNewsListSubject$
      .getValue()
      .filter((trending) => trending._id  !== id);

      this.trendingNewsListSubject$.next(filteredTrendings);
    });
  }

  getTrendingNewsById(id: string): Observable<TrendingNewsModel> {
    return this.http.get(`api/trendings/${id}`).pipe(tap((trendingNews: TrendingNewsModel) => {
      this.selectedTrendingNewsSubject$.next(trendingNews);
    }));
  }

  updateTrendingNews(trendingNewsDataInfo: TrendingNews) {
    this.http.put(`api/trendings/${trendingNewsDataInfo._id}`, trendingNewsDataInfo).subscribe(() => {
      this.selectedTrendingNewsSubject$.next(null);
    });
  }

  getTrendingNewsByState(stateName: string) {
    this.http.get(`api/trendings?state=${stateName}`).subscribe((res: any) => {
      res.forEach(trending => {
        trending.videoId = this.getYoutubeId(trending.youtubeUrl);
      });
      this.trendingNewsListSubject$.next(res);
    });
  }

  getYoutubeId(youtubeUrl: string): string {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = youtubeUrl.match(regExp);
    if (match && match[2].length === 11) {
      return match[2];
    }
  }
}
