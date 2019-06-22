import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TRENDING_NEWS_ROUTES } from './pages-trending-news.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TRENDING_NEWS_ROUTES)
  ]
})
export class PagesTrendingNewsModule {}
