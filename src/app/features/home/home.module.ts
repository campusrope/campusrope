import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../shared/shared.module";

import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { ShellModule } from "src/app/shell/shell.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, ShellModule]
})
export class HomeModule {}
