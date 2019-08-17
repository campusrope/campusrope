import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-youtube-player",
  templateUrl: "./youtube-player.component.html",
  styleUrls: ["./youtube-player.component.scss"]
})
export class YoutubePlayerComponent implements OnInit {

  player: YT.Player;
  @Input() id: string;
  constructor() { }

  ngOnInit() {
  }

  savePlayer(player: YT.Player) {
    this.player = player;
    console.log("player instance", player);
  }
  onStateChange(event: { data: any; }) {
    console.log("player state", event.data);
  }
}
