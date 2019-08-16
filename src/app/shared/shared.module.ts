import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxYoutubePlayerModule } from "ngx-youtube-player";
import { TranslateModule } from "@ngx-translate/core";
import { MaterialModule } from "./material/material.module";
import { YoutubePlayerComponent } from "./youtube-player/youtube-player.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    NgxYoutubePlayerModule,
    MaterialModule],
  declarations: [YoutubePlayerComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    MaterialModule,
    YoutubePlayerComponent
  ],
  entryComponents: [YoutubePlayerComponent]
})
export class SharedModule {}
