import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { CenterpaneComponent } from 'src/app/shell/centerpane/centerpane.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: CenterpaneComponent
      },
      {
        path: 'admin-task',
        loadChildren: () =>
          import('../admin-task/admin-task.module').then(m => m.AdminTaskModule)
      },
      {
        path: 'trending-news',
        loadChildren: () =>
          import('../trending-news/trending-news.module').then(m => m.TrendingNewsModule)
      },
      {
        path: 'helpline',
        loadChildren: () =>
          import('../helpline/helpline.module').then(m => m.HelplineModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
