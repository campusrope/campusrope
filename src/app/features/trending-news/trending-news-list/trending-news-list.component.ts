import { Component, OnInit } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { TrendingNewsService } from "../trending-news.service";
import { StateConstantService } from "src/app/core/core.module";
import { AppState, getIsMobile } from "src/app/state";

@Component({
  selector: "app-trending-news-list",
  templateUrl: "./trending-news-list.component.html",
  styleUrls: ["./trending-news-list.component.scss"]
})
export class TrendingNewsListComponent implements OnInit {
  trendingNewsList: any = [];
  isMobile$: Observable<boolean>;
  states: any = [];
  routerEvent: NavigationStart;

  constructor(
    private trendingNewsService: TrendingNewsService,
    private stateConstantService: StateConstantService,
    private store: Store<AppState>,
    private router: Router
    ) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.routerEvent = event;
      }
    });
    this.isMobile$ = this.store.pipe(select(getIsMobile));
    this.trendingNewsList = this.trendingNewsService.getTrendingNewsList();
    this.states = this.stateConstantService.getStates();
  }

  onDeleteTrendingNews(index: number) {
    this.trendingNewsService.deleteTrendingNews(index);
    this.trendingNewsList = this.trendingNewsService.getTrendingNewsList();
  }
}
