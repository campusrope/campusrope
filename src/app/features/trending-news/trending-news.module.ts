import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TRENDING_NEWS_ROUTES } from './trending-news.routes';
import { TrendingNewsListComponent } from './trending-news-list/trending-news-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(TRENDING_NEWS_ROUTES)],
  declarations: [TrendingNewsListComponent],
  exports: [],
  entryComponents: [TrendingNewsListComponent]
})
export class TrendingNewsModule {}
