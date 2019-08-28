import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { TrendingNewsService, TrendingNewsModel } from "../trending-news.service";
import { StateConstantService } from "src/app/core/core.module";
import { AppState, getIsMobile } from "src/app/state";

@Component({
  selector: "app-trending-news-list",
  templateUrl: "./trending-news-list.component.html",
  styleUrls: ["./trending-news-list.component.scss"]
})
export class TrendingNewsListComponent implements OnInit {
  isMobile$: Observable<boolean>;
  trendingNewsList$: Observable<TrendingNewsModel[]>;
  states: any = [];
  selectedState: string;

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

  onStateChange() {
    this.trendingNewsService.getTrendingNewsByState(this.selectedState);
  }
}
