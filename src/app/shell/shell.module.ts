import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LeftpaneComponent } from "./leftpane/leftpane.component";
import { RightpaneComponent } from "./rightpane/rightpane.component";
import { CenterpaneComponent } from "./centerpane/centerpane.component";
import { AppbarComponent } from "./appbar/appbar.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { TrendingNewsModule } from "../features/trending-news/trending-news.module";

@NgModule({
  declarations: [
    LeftpaneComponent,
    RightpaneComponent,
    CenterpaneComponent,
    AppbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    TrendingNewsModule
  ],
  exports: [
    LeftpaneComponent,
    RightpaneComponent,
    CenterpaneComponent,
    AppbarComponent
  ]
})
export class ShellModule {}
