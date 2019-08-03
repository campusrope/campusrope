import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TRENDING_NEWS_ROUTES } from "./trending-news.routes";
import { TrendingNewsListComponent } from "./trending-news-list/trending-news-list.component";
import { SharedModule } from "src/app/shared/shared.module";
import { TrendingNewsAddComponent } from "./trending-news-add/trending-news-add.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(TRENDING_NEWS_ROUTES)
  ],
  declarations: [
    TrendingNewsListComponent,
    TrendingNewsAddComponent
  ],
  exports: [],
  entryComponents: [TrendingNewsListComponent]
})
export class TrendingNewsModule {}
