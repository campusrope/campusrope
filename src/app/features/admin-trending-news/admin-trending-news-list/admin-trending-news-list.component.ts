import { Component, OnInit } from "@angular/core";
import { TrendingNewsService, TrendingNewsList } from "../../trending-news/trending-news.service";
import { StateConstantService } from "src/app/core/core.module";
import { Observable } from "rxjs";

@Component({
  selector: "app-admin-trending-news-list",
  templateUrl: "./admin-trending-news-list.component.html",
  styleUrls: ["./admin-trending-news-list.component.scss"]
})
export class AdminTrendingNewsListComponent implements OnInit {
  trendingNewsList$: Observable<TrendingNewsList[]>;
  states: any = [];

  constructor(
    private trendingNewsService: TrendingNewsService,
    private stateConstantService: StateConstantService
    ) {
      this.trendingNewsList$ = this.trendingNewsService.trendingNewsList$;
    }

  ngOnInit() {
    this.trendingNewsService.getTrendingNewsList();
    this.states = this.stateConstantService.getStates();
  }

  onDeleteTrendingNews(id: string) {
    this.trendingNewsService.deleteTrendingNews(id);
  }

}
