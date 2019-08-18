import { Routes } from "@angular/router";
import { TrendingNewsAddComponent } from "../trending-news/trending-news-add/trending-news-add.component";
import { TrendingNewsEditComponent } from "../trending-news/trending-news-edit/trending-news-edit.component";
import { TopicListComponent } from "../trending-news/topics/topic-list/topic-list.component";
// tslint:disable-next-line: max-line-length
import { ManageClientListComponent } from "../trending-news/trending-news-add/manage-client/manage-client-list/manage-client-list.component";
import { AdminTrendingNewsListComponent } from "./admin-trending-news-list/admin-trending-news-list.component";

export const ADMIN_TRENDING_NEWS_ROUTES: Routes = [
  { path: "", pathMatch: "full", component: AdminTrendingNewsListComponent },
  { path: "add", component: TrendingNewsAddComponent },
  { path: "edit/:id", component: TrendingNewsEditComponent },
  { path: "topics", component: TopicListComponent },
  { path: "add/manage-client", component: ManageClientListComponent },
];
