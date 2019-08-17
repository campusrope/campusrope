import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { ADMIN_TRENDING_NEWS_ROUTES } from "./admin-trending-news.routes";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ADMIN_TRENDING_NEWS_ROUTES)
  ]
})
export class AdminTrendingNewsModule { }
