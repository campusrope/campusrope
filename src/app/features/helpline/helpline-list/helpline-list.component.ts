import { Component, OnInit } from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import { HelplineService } from "../helpline.service";
import { LinksDialogModalComponent } from "../links-dialog-modal/links-dialog-modal.component";

@Component({
  selector: "app-helpline-list",
  templateUrl: "./helpline-list.component.html",
  styleUrls: ["./helpline-list.component.scss"]
})
export class HelplineListComponent implements OnInit {
  helplineList: any = [];
  constructor(private helplineService: HelplineService,
              private dialog: MatDialog) {}

  ngOnInit() {
    this.helplineList = this.helplineService.getHelplineList();
  }

  openDialog(helplineNo: string, title: string) {
    this.dialog.open(LinksDialogModalComponent, {
      width: "350px",
      data: {
        link: helplineNo,
        title
      }
    });
  }


}
