import { Component, OnInit } from "@angular/core";
import { HelplineService } from "../helpline.service";

@Component({
  selector: "app-helpline-list",
  templateUrl: "./helpline-list.component.html",
  styleUrls: ["./helpline-list.component.scss"]
})
export class HelplineListComponent implements OnInit {
  helplineList: any = [];
  constructor(private helplineService: HelplineService) {}

  ngOnInit() {
    this.helplineList = this.helplineService.getHelplineList();
  }
}
