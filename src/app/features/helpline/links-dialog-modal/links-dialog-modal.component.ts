import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: "app-links-dialog-modal",
  templateUrl: "./links-dialog-modal.component.html",
  styleUrls: ["./links-dialog-modal.component.scss"]
})
export class LinksDialogModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

}
