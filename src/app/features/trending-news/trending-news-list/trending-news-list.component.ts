import { Component, OnInit } from "@angular/core";
import { TrendingNewsService } from "../trending-news.service";

@Component({
  selector: "app-trending-news-list",
  templateUrl: "./trending-news-list.component.html",
  styleUrls: ["./trending-news-list.component.scss"]
})
export class TrendingNewsListComponent implements OnInit {
  trendingNewsList: any = [];
  constructor(
    private trendingNewsService: TrendingNewsService
    ) {}

  ngOnInit() {
    this.trendingNewsList = this.trendingNewsService.getTrendingNewsList();
  }
}
