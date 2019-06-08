import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { AngularMaterialModule } from '@campusrope/material';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AngularMaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
