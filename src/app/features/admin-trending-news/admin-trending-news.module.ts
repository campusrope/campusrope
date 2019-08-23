import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { ADMIN_TRENDING_NEWS_ROUTES } from "./admin-trending-news.routes";
import { AdminTrendingNewsListComponent } from "./admin-trending-news-list/admin-trending-news-list.component";
import { AddTopicDialogModal } from "../trending-news/topics/topic-list/topic-list.component";
import { AddClientDialogModal } from "../trending-news/trending-news-add/manage-client/manage-client-list/manage-client-list.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ADMIN_TRENDING_NEWS_ROUTES)
  ],
  declarations: [
    AdminTrendingNewsListComponent
  ],
  entryComponents: [AdminTrendingNewsListComponent, AddTopicDialogModal, AddClientDialogModal]
})
export class AdminTrendingNewsModule { }
