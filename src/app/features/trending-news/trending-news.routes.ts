import { Routes } from "@angular/router";
import { TrendingNewsListComponent } from "./trending-news-list/trending-news-list.component";

export const TRENDING_NEWS_ROUTES: Routes = [
  { path: "", pathMatch: "full", component: TrendingNewsListComponent }
];
