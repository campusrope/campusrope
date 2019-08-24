import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { TrendingNewsService, TrendingNewsList } from "../trending-news.service";
import { StateConstantService } from "src/app/core/core.module";
import { AppState, getIsMobile } from "src/app/state";

@Component({
  selector: "app-trending-news-list",
  templateUrl: "./trending-news-list.component.html",
  styleUrls: ["./trending-news-list.component.scss"]
})
export class TrendingNewsListComponent implements OnInit {
  isMobile$: Observable<boolean>;
  trendingNewsList$: Observable<TrendingNewsList[]>;
  states: any = [];

  constructor(
    private trendingNewsService: TrendingNewsService,
    private stateConstantService: StateConstantService,
    private store: Store<AppState>
    ) {
      this.trendingNewsList$ = this.trendingNewsService.trendingNewsList$;
    }

  ngOnInit() {
    this.isMobile$ = this.store.pipe(select(getIsMobile));
    this.trendingNewsService.getTrendingNewsList();
    this.states = this.stateConstantService.getStates();
  }
}
