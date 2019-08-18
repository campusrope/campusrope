import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { ADMIN_TRENDING_NEWS_ROUTES } from "./admin-trending-news.routes";
import { AdminTrendingNewsListComponent } from "./admin-trending-news-list/admin-trending-news-list.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ADMIN_TRENDING_NEWS_ROUTES)
  ],
  declarations: [
    AdminTrendingNewsListComponent
  ],
})
export class AdminTrendingNewsModule { }
