import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";

export interface TrendingNews {
  _id?: string;
  headline: string;
  youtubeUrl: string;
  state: string;
  topic: string;
  client: string;
}

@Injectable({
  providedIn: "root"
})
export class TrendingNewsService {

  private readonly trendingNewsListSubject$ = new BehaviorSubject<TrendingNews[]>([]);
  private readonly selectedTrendingNewsSubject$ = new BehaviorSubject<TrendingNews>(null);

  public trendingNewsList$: Observable<TrendingNews[]> = this.trendingNewsListSubject$.asObservable();

  public selectedTrendingNews$: Observable<TrendingNews> = this.selectedTrendingNewsSubject$.asObservable();

  constructor(private http: HttpClient) {}

  getTrendingNewsList() {
    this.http.get("api/trendings").subscribe((res: any) => {
      this.trendingNewsListSubject$.next(res);
    });
  }

  addTrendingNews(trendingNewsData: TrendingNews) {
    this.http.post(`api/trendings`, trendingNewsData).subscribe((res: any) => {
      res.videoId = this.getYoutubeId(res.youtubeUrl);
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

  getTrendingNewsById(id: string) {
    this.http.get(`api/trendings/${id}`).subscribe((trendingNews: any) => {
      this.selectedTrendingNewsSubject$.next(trendingNews);
    });
  }

  updateTrendingNews(trendingNewsDataInfo: TrendingNews) {
    this.http.put(`api/trendings/${trendingNewsDataInfo._id}`, trendingNewsDataInfo).subscribe(() => {
      this.selectedTrendingNewsSubject$.next(null);
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
