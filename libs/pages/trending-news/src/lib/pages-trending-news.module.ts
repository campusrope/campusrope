import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TRENDING_NEWS_ROUTES } from './pages-trending-news.routes';
import { TrendingNewsListComponent } from './trending-news-list/trending-news-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TRENDING_NEWS_ROUTES)
  ],
  declarations: [TrendingNewsListComponent],
  exports: [TrendingNewsListComponent],
  entryComponents: [TrendingNewsListComponent]
})
export class PagesTrendingNewsModule {}
