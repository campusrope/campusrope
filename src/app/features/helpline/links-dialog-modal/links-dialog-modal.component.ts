import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { NotificationService } from "src/app/core/core.module";

@Component({
  selector: "app-links-dialog-modal",
  templateUrl: "./links-dialog-modal.component.html",
  styleUrls: ["./links-dialog-modal.component.scss"]
})
export class LinksDialogModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LinksDialogModalComponent>,
    private notificationService: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  copyText(val: string) {
      const selBox = document.createElement("textarea");
      selBox.style.position = "fixed";
      selBox.style.left = "0";
      selBox.style.top = "0";
      selBox.style.opacity = "0";
      selBox.value = val;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand("copy");
      document.body.removeChild(selBox);
      this.notificationService.success("Text Copied");
    }
}
