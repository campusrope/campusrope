import { Component, OnInit } from "@angular/core";
import { TrendingNewsService } from "../../trending-news/trending-news.service";
import { StateConstantService } from "src/app/core/core.module";

@Component({
  selector: "app-admin-trending-news-list",
  templateUrl: "./admin-trending-news-list.component.html",
  styleUrls: ["./admin-trending-news-list.component.scss"]
})
export class AdminTrendingNewsListComponent implements OnInit {
  trendingNewsList: any = [];
  states: any = [];

  constructor(
    private trendingNewsService: TrendingNewsService,
    private stateConstantService: StateConstantService
    ) {}

  ngOnInit() {
    this.trendingNewsList = this.trendingNewsService.getTrendingNewsList();
    this.states = this.stateConstantService.getStates();
  }

  onDeleteTrendingNews(index: number) {
    // this.trendingNewsService.deleteTrendingNews(index);
    this.trendingNewsList = this.trendingNewsService.getTrendingNewsList();
  }

}
