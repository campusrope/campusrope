import { Routes } from "@angular/router";
import { TrendingNewsListComponent } from "./trending-news-list/trending-news-list.component";
import { TrendingNewsAddComponent } from "./trending-news-add/trending-news-add.component";
import { TopicListComponent } from "./topics/topic-list/topic-list.component";
import { ManageClientListComponent } from "./trending-news-add/manage-client/manage-client-list/manage-client-list.component";
import { TrendingNewsEditComponent } from "./trending-news-edit/trending-news-edit.component";

export const TRENDING_NEWS_ROUTES: Routes = [
  { path: "", pathMatch: "full", component: TrendingNewsListComponent },
  { path: "add", component: TrendingNewsAddComponent },
  { path: "edit/:id", component: TrendingNewsEditComponent },
  { path: "topics", component: TopicListComponent },
  { path: "add/manage-client", component: ManageClientListComponent },
];
