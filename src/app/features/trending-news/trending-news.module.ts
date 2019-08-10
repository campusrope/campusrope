import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TRENDING_NEWS_ROUTES } from "./trending-news.routes";
import { TrendingNewsListComponent } from "./trending-news-list/trending-news-list.component";
import { SharedModule } from "src/app/shared/shared.module";
import { TrendingNewsAddComponent } from "./trending-news-add/trending-news-add.component";
import { TopicListComponent, AddTopicDialogModal } from "./topics/topic-list/topic-list.component";
import { ManageClientListComponent } from "./trending-news-add/manage-client/manage-client-list/manage-client-list.component";
import { TrendingNewsService } from "./trending-news.service";
import { TrendingNewsEditComponent } from "./trending-news-edit/trending-news-edit.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(TRENDING_NEWS_ROUTES)
  ],
  declarations: [
    TrendingNewsListComponent,
    TrendingNewsAddComponent,
    TopicListComponent,
    ManageClientListComponent,
    AddTopicDialogModal,
    TrendingNewsEditComponent
  ],
  providers: [
    TrendingNewsService
  ],
  exports: [],
  entryComponents: [TrendingNewsListComponent, AddTopicDialogModal]
})
export class TrendingNewsModule {}
